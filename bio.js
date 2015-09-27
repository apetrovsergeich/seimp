var txt=new Array("metan", "matan", "govno", "bydlo", "scientist", "priest", "robot", "unhuman", "religion", "smeh", "humanist")
var elements={metan:0, matan:0, govno:0, bydlo:0, scientist:0,priest:0, robot:0,unhuman:0, religion:0, smeh:0, humanist:0};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var help_div;
var graph_div;
var upgrade_div;
var upgrade_butt;
var upgrade_div_r;
var upgrade_butt_r;
var upgrade_div_u;
var upgrade_butt_u;
var upgrade_div_s;
var upgrade_butt_s;
var ros_but;
var ros_div;
var step_;
var realt;
var news;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//system variables
var u1=false;
var u2=false;
var u3=false;
var u4=false;
var u5=false;



//level variables
var unhuman_level=1;
var robot_level=0;
var science_level=1;
var rosatiy_l=1;
var bioreactor_level=0;

var iteration=0;


//bydlo & govno variablrs
var gov_to_met=25;
var g_t_m_koeff=5;
var bb_koeff=4;
var bm_koeff=5;

//science variables
var matan_koeff=1;
var matan_metan_koeff=2;
var matan_scientist_koeff=10;

//unhuman varables
var smeh_koeff=1;
var matan_unhuman_koeff=25;
var metan_unhuman_koeff=10;
//var unhuman_koeff_p=0.1;
var unhuman_priest_kill=2;

//robot variables
var robot_priest_kill=2;
var metan_robot_koeff=25;
var bydlo_metan_koeff=2;

//humanist variables
var humanist_eat_shit=4;
var humanist_eat_matan=1;
var humanist_eat_smeh=1;






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ressource={
metan:250, matan:50, govno:0, bydlo:20, scientist:5, priest:0, robot:0, unhuman:0, religion:0, smeh:25, humanist:0
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var res_scientist=
{
work0:0, work1:0, work2:0,
d_work0:0, d_work1:0, d_work2:0, reserv:0
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var res_robot=
{
work0:0, work1:0, work2:0,
d_work0:0, d_work1:0, d_work2:0, reserv:0
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var res_unhuman=
{
work0:0, work1:0, work2:0,
d_work0:0, d_work1:0, d_work2:0, reserv:0
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function real_time()
{
if (realt.checked==true)
next_it();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function plus_div(obj, field)
{
var obj1=eval("res_"+obj);
if ((obj1['work0']+obj1['work1']+obj1['work2'])< ressource[obj])
{obj1[field]+=1;
obj1["d_"+field].value=obj1[field];
var sum=ressource[obj]-(obj1['work0']+obj1['work1']+obj1['work2']);
obj1['reserv'].innerHTML="<b>"+sum+"</b>"
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function safe_plus(obj1, obj2)
{
obj1+=obj2;
if (obj1>0)
return Math.ceil(obj1);
else return 0;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function minus_div(obj, field)
{
var obj1=eval("res_"+obj);
if (obj1[field]>0)
{obj1[field]-=1;
obj1["d_"+field].value=obj1[field];};
var sum=ressource[obj]-(obj1['work0']+obj1['work1']+obj1['work2']);
obj1['reserv'].innerHTML="<b>"+sum+"</b>"

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function correct_input(obj, field)
{
var obj1=eval("res_"+obj);
obj1["d_"+field].value = obj1["d_"+field].value.replace(/^\s+/, '');


if (isNaN(obj1["d_"+field].value) || obj1["d_"+field].value=="" || obj1["d_"+field].value<0)
{obj1["d_"+field].value=obj1[field]; return;}

var sum=ressource[obj]-(obj1['work0']+obj1['work1']+obj1['work2'])+obj1[field];

if (eval (obj1["d_"+field].value)>sum)
{
obj1[field]=sum;
}
else obj1[field]=eval (obj1["d_"+field].value);

obj1["d_"+field].value=obj1[field]
sum=ressource[obj]-(obj1['work0']+obj1['work1']+obj1['work2']);
obj1['reserv'].innerHTML="<b>"+sum+"</b>"
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function preload()
{
init_graph();
load_window();
load_window_s();
matan_dev[0]=ressource['matan'];
metan_dev[0]=ressource['metan'];
scientist_dev[0]=ressource['scientist'];
unhuman_dev[0]=ressource['unhuman'];
robot_dev[0]=ressource['robot'];
bydlo_dev[0]=ressource['bydlo'];
govno_dev[0]=ressource['govno'];
humanist_dev[0]=ressource['humanist'];
priest_dev[0]=ressource['priest'];
smeh_dev[0]=ressource['smeh'];

for (i=0; i<txt.length; i++)
{
elements[txt[i]]=document.getElementById('#'+txt[i]);


if (txt[i]=='robot' || txt[i]=='scientist' || txt[i]=='unhuman')
{
var ob=eval("res_"+txt[i]);
ob['d_work0']=document.getElementById('#'+txt[i]+"_work0");
ob['d_work0'].value=0;
ob['d_work1']=document.getElementById('#'+txt[i]+"_work1");
ob['d_work1'].value=0;
ob['d_work2']=document.getElementById('#'+txt[i]+"_work2");
ob['d_work2'].value=0;
ob['reserv']=document.getElementById('#'+txt[i]+"_reserv");
}
}
help_div=document.getElementById('#help');
graph_div=document.getElementById('#graph_');
upgrade_div=document.getElementById('#bio_up');
upgrade_butt=document.getElementById('#upbio');
upgrade_div_r=document.getElementById('#robot_up');
upgrade_butt_r=document.getElementById('#uprobot');
upgrade_div_u=document.getElementById('#unhuman_up');
upgrade_butt_u=document.getElementById('#upunhuman');
upgrade_div_s=document.getElementById('#science_up');
upgrade_butt_s=document.getElementById('#upscience');
mass=document.getElementById('#mass');
news=document.getElementById('#news');
news.value="";

ros_but=document.getElementById('#roscall');
ros_div=document.getElementById('#rosatiy_call');
realt=document.getElementById("#rt");
step_=document.getElementById("#step");

redraw_ressources();
redraw_tr();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hidehelp()
{
help_div.style.display="none";

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function help(str)
{

help_div.style.display="block";
help_div.innerHTML=help_txt[str];
help_div.innerHTML+="<br><div align=right><a href='javascript:hidehelp()' class='menu_item'>Скрыть помощь</a></div>";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function show_graph()
{

graph_div.style.display="block";
tooglgr=document.getElementById('#tooglgr');
tooglgr.innerHTML='<a href="javascript:hide_graph();" class="menu_item">Скрыть график</a>';
}
function hide_graph()
{graph_div.style.display="none";
tooglgr=document.getElementById('#tooglgr');
tooglgr.innerHTML='<a href="javascript:show_graph();" class="menu_item">Показать график</a>';
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function redraw_ressources()
{
for (i=0; i<txt.length; i++)
{
ressource[txt[i]]=Math.ceil(ressource[txt[i]]);
elements[txt[i]].innerHTML=ressource[txt[i]];
}

res_scientist['reserv'].innerHTML="<b>"+(ressource['scientist']-(res_scientist['work0']+res_scientist['work1']+res_scientist['work2']))+"</b>";
res_robot['reserv'].innerHTML="<b>"+(ressource['robot']-(res_robot['work0']+res_robot['work1']+res_robot['work2']))+"</b>";
res_unhuman['reserv'].innerHTML="<b>"+(ressource['unhuman']-(res_unhuman['work0']+res_unhuman['work1']+res_unhuman['work2']))+"</b>";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function redraw_tr()
{

if (!u1){
upgrade_div.innerHTML="<b>Требуется: ";
if (ressource['matan']>= (bioreactor_level+1)*50)
{upgrade_div.innerHTML+="<span class=\"ok\">"+(bioreactor_level+1)*50+"K строк кода, </span>"; upgrade_butt.disabled=false;}
else
{upgrade_div.innerHTML+="<span class=\"failed\">"+(bioreactor_level+1)*50+"К строк кода, </span>"; upgrade_butt.disabled=true;}
if (ressource['metan']>= (bioreactor_level+1)*50)
upgrade_div.innerHTML+="<span class=\"ok\">"+(bioreactor_level+1)*50+"M$ денег.</span>";
else
{upgrade_div.innerHTML+="<span class=\"failed\">"+(bioreactor_level+1)*50+"M$ денег.</span>";upgrade_butt.disabled=true;}
upgrade_div.innerHTML+="</b>";
}

if (!u2){
upgrade_div_r.innerHTML="<b>Требуется: ";
if (ressource['metan']>= (robot_level+1)*100+Math.pow(1.1, robot_level)-1)
{upgrade_div_r.innerHTML+="<span class=\"ok\">"+Math.ceil((robot_level+1)*100+Math.pow(1.1, robot_level)-1)+"M$  денег. </span>"; upgrade_butt_r.disabled=false;}
else
{upgrade_div_r.innerHTML+="<span class=\"failed\">"+Math.ceil((robot_level+1)*100+Math.pow(1.1, robot_level)-1)+"M$  денег. </span>"; upgrade_butt_r.disabled=true;}
upgrade_div_r.innerHTML+="</b>";
}

if (!u3){
upgrade_div_u.innerHTML="<b>Требуется: ";
if (ressource['metan']>= unhuman_level*50)
{upgrade_div_u.innerHTML+="<span class=\"ok\">"+Math.ceil(unhuman_level*50)+"M$  денег,</span>"; upgrade_butt_u.disabled=false;}
else
{upgrade_div_u.innerHTML+="<span class=\"failed\">"+Math.ceil(unhuman_level*50)+"M$  денег,</span>";upgrade_butt_u.disabled=true;}
if (ressource['religion']<=0)
{upgrade_div_u.innerHTML+="<span class=\"ok\"> отрицательный или нулевой уровень спама</span>";}
else
{upgrade_div_u.innerHTML+="<span class=\"failed\"> отрицательный или нулевой уровень спама</span>"; upgrade_butt_u.disabled=true;}
upgrade_div_u.innerHTML+="</b>";
}


if (!u4){
ros_div.innerHTML="<b>Требуется: ";
if (ressource['smeh']>= rosatiy_l*25)
{ros_div.innerHTML+="<span class=\"ok\">"+(rosatiy_l*25)+"  пост в блоге.</span>"; ros_but.disabled=false;}
else
{ros_div.innerHTML+="<span class=\"failed\">"+(rosatiy_l*25)+"  пост в блоге.</span>";ros_but.disabled=true;}
upgrade_div_u.innerHTML+="</b>";
}

if (!u5){
upgrade_div_s.innerHTML="<b>Требуется: ";
if (ressource['metan']>= science_level*100)
{upgrade_div_s.innerHTML+="<span class=\"ok\">"+science_level*100+"M$  денег. </span>"; upgrade_butt_s.disabled=false;
}
else
{upgrade_div_s.innerHTML+="<span class=\"failed\">"+science_level*100+"M$  денег. </span>"; upgrade_butt_s.disabled=true;}
upgrade_div_s.innerHTML+="</b>";
}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reduce (obj)
{
obj1=eval("res_"+obj);
var i=0;
while (obj1['work0']+obj1['work1']+obj1['work2']>ressource[obj])
{
if (obj1['work'+i]>0) obj1['work'+i]--;
i++;
if (i>2) i=0;
}

for (i=0; i<3; i++)
obj1['d_work'+i].value=obj1['work'+i];

obj1['reserv'].innerHTML="<b>"+Math.ceil(ressource[obj]-(obj1['work0']+obj1['work1']+obj1['work2']))+"</b>";

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function n_it_b()
{
if (mess_window.style.display=="block") return;
realt.checked=false;
next_it();
}

function next_it()
{
if (pause) return;
news.value="Ход - "+iteration+"\n";


//Шаг 1 - производство ресурсов


//прирост говна

var tmp=ressource['bydlo']*1.5;
if (tmp>0)
{news.value+="Пользователями было произведено "+ tmp + "Пб данных";
ressource['govno']+=tmp;}


//производство метана
if (ressource['govno']>gov_to_met*(bioreactor_level+1))
{
var tmp=Math.ceil(gov_to_met*(bioreactor_level+1)/g_t_m_koeff);
if (tmp>0)
{news.value+="\n"+ Math.ceil(gov_to_met*(bioreactor_level+1))+ "Пб данных обработано.";
news.value+="При этом заработано "+ Math.ceil(gov_to_met*(bioreactor_level+1)/g_t_m_koeff)+ "M$ денег";

ressource['metan']=safe_plus(ressource['metan'], tmp);
ressource['govno']=safe_plus(ressource['govno'], -Math.ceil(gov_to_met*(bioreactor_level+1)) );}
}
else
{
var tmp=Math.ceil(ressource['govno']/g_t_m_koeff);
if (tmp>0)
{news.value+="\n Все имеющиеся в наличии данные были обработаны.";
news.value+="При этом заработано "+ tmp+ "M$ денег";
ressource['metan']=safe_plus(ressource['metan'], tmp);
ressource['govno']=0; }
}

//размножение быдла
tmp=Math.ceil(ressource['bydlo']/bb_koeff);
if (tmp>0)
{news.value+="\nПришло  "+ tmp+ " пользователей.";
ressource['bydlo']=safe_plus(ressource['bydlo'], tmp);}

if (ressource['metan']<Math.ceil(ressource['bydlo']/bm_koeff))
{
tmp=(ressource['bydlo']-Math.ceil(ressource['metan']*bm_koeff));
if (tmp>0)
{news.value+="\n"+ tmp+ " пользователей умерло из-за недостатка денег.";
ressource['bydlo']=Math.ceil(ressource['metan']*bm_koeff);}
}

//размножение клерикалов
var tmp=ressource['priest'];
ressource['priest']+=Math.ceil(ressource['priest']/10);

if (Math.ceil(ressource['govno']/(ressource['matan']+1))>0)
{
ressource['priest']=safe_plus(ressource['priest'], Math.ceil(ressource['govno']/(ressource['matan']+1)));
}
if (ressource['priest']>ressource['bydlo']) ressource['priest']=ressource['bydlo'];

if (tmp>ressource['priest'])
news.value+="\nКоличество сеошников уменьшилось на "+ (tmp-ressource['priest'])+ " единиц.";
else if (tmp<ressource['priest'])
news.value+="\nКоличество сеошников возросло на "+ (ressource['priest']-tmp)+ " единиц.";



//размножение гуманитариев
tmp=Math.ceil(ressource['scientist']/10);
if (tmp>0)
{ressource['humanist']+=tmp;
news.value+="\nКоличество появившихся сливателей: "+ tmp+ ".";}

if (res_scientist['work2']+res_unhuman['work0'])
{//антиклерикальная пропаганда
ressource['religion']-=res_scientist['work2'];

//антиклерикальная пропаганда
ressource['religion']-=res_unhuman['work0'];

news.value+="\nСилами разработчиков и менеджеров уничтожено "+ (res_unhuman['work0']+res_scientist['work2'])+ " спама.";
}

//производство матана
if (res_scientist['work1']>0){
if (res_scientist['work1']*matan_metan_koeff<=ressource['metan'])
{
news.value+="\nРазработчиками написано "+ Math.ceil(res_scientist['work1']*matan_koeff)+ "K строк  кода.";
news.value+="\nПри этом израсходовано "+ Math.ceil(res_scientist['work1']*matan_metan_koeff)+ "M$ денег.";
ressource['matan']= safe_plus(ressource['matan'], res_scientist['work1']*matan_koeff);
ressource['metan']= safe_plus(ressource['metan'], -res_scientist['work1']*matan_metan_koeff);
}
else {
news.value+="\nРазработчиками написано "+ Math.ceil(ressource['metan']/matan_metan_koeff*matan_koeff)+ "K строк кода.";
news.value+="\nПри этом израсходованы все доступные деньги.";
ressource['matan']= safe_plus(ressource['matan'], ressource['metan']/matan_metan_koeff*matan_koeff);
ressource['metan']= 0;
}
}

//производство смехуечек UNHUMAN
if (res_unhuman['work2']>0){
if (res_unhuman['work2']*smeh_koeff<=ressource['matan'])
{
news.value+="\nМенеджеры написали "+ Math.ceil(res_unhuman['work2']*smeh_koeff)+ "  постов в блог.";
ressource['smeh']= safe_plus(ressource['smeh'], res_unhuman['work2']*smeh_koeff);
}
else {
news.value+="\nМенеджеры написали "+ Math.ceil(ressource['matan'])+ "  постов в блог.";
ressource['smeh']= safe_plus(ressource['smeh'], ressource['matan']);
}
}
//производство метана Robot

if (res_robot['work2']>0){
if (res_robot['work2']<=ressource['bydlo'])
{
news.value+="\nСотрудниками антиспама было заработано "+ Math.ceil(res_robot['work2']*bydlo_metan_koeff)+ "M$  денег.";
news.value+="\nПри этом было забанено "+ res_robot['work2']+ " пользователей.";
ressource['metan']= safe_plus(ressource['metan'], res_robot['work2']*bydlo_metan_koeff);
ressource['bydlo']= safe_plus(ressource['bydlo'],-res_robot['work2']);
}
else {
news.value+="\nСотрудниками антиспама было заработано "+ Math.ceil(ressource['bydlo']*bydlo_metan_koeff)+ "M$  денег.";
news.value+="\nПри этом были забанены все пользователи\n".
ressource['metan']= safe_plus(ressource['metan'],ressource['bydlo']*bydlo_metan_koeff);
ressource['bydlo']= 0;
}
}

tmp=ressource['scientist'];

//размножение ученых
if (res_scientist['work0']*matan_scientist_koeff<=ressource['matan'])
ressource['scientist']= safe_plus(ressource['scientist'],res_scientist['work0']);
else
ressource['scientist']=safe_plus(ressource['scientist'],Math.ceil(ressource['matan']/matan_scientist_koeff));

if ((ressource['scientist']-tmp)>0)
news.value+="\nНанято "+ (ressource['scientist']-tmp)+ "  разработчиков.";

if (ressource['scientist']>ressource['metan'])
{
tmp=ressource['scientist'];
news.value+="\n"+ (ressource['scientist']-ressource['metan'])+ "  разработчиков уволено из-за недостатка денег.";
ressource['scientist']=ressource['metan'];
}

reduce('scientist');

tmp=ressource['unhuman'];
//размножение UNHUMAN
if (ressource['religion']<0)
{
var k=Math.abs(ressource['religion']*unhuman_level/10)*Math.random();
if (res_scientist['work0']*matan_unhuman_koeff<=ressource['matan'])
ressource['unhuman']=safe_plus(ressource['unhuman'],res_scientist['work0']+k);
else
ressource['unhuman']=safe_plus(ressource['unhuman'],Math.ceil(ressource['matan']/(matan_unhuman_koeff)+k));
}

if (ressource['unhuman']>ressource['scientist'])
{ressource['unhuman']=ressource['scientist'];}

if ((ressource['unhuman']-tmp)>0)
news.value+="\nПроизведено "+ (ressource['unhuman']-tmp)+ "  нелюдей.";



if (ressource['unhuman']>ressource['metan']/metan_unhuman_koeff)
{
news.value+="\n"+ ressource['unhuman']-Math.ceil(ressource['metan']/metan_unhuman_koeff)+ "  менеджеров уволено из-за недостатка денег.";
ressource['unhuman']=Math.ceil(ressource['metan']/metan_unhuman_koeff);}

reduce('unhuman');


//размножение Robot
if (res_robot['work0']>0)
{if (res_robot['work0']*metan_robot_koeff<=ressource['metan'])
{
news.value+="\nСотрудниками антиспама было нанято "+ res_robot['work0']+ "  сотрудников антиспама.";
news.value+="\nПри этом было израсходовано "+ Math.ceil(res_robot['work0']*metan_robot_koeff)+ "M$ денег.";
ressource['robot']=safe_plus(ressource['robot'],res_robot['work0']);
ressource['metan']=safe_plus(ressource['metan'],-res_robot['work0']*metan_robot_koeff);
}
else
{
news.value+="\nСотрудниками антиспама было нанято "+ Math.ceil(ressource['metan']/metan_robot_koeff)+ "  сотрудников антиспама.";
news.value+="\nПри этом были израсходованы все деньги.";
ressource['robot']=safe_plus(ressource['robot'],ressource['metan']/metan_robot_koeff);
ressource['metan']=0;
}}






//Убийство гуманитариев
if (res_unhuman['work1']>0)
{
var t1=safe_plus(ressource['humanist'],-Math.ceil(res_unhuman['work1']*(1+unhuman_priest_kill/10)))
news.value+="\nМенеджерыми уничтожено "+ (ressource['humanist']-t1)+ "  сливателей.";
ressource['humanist']=t1;}

//Убийство клерикалов Robot
if (res_robot['work1']>0){
if (res_robot['work1']*robot_priest_kill>ressource['priest'])
{news.value+="\nСотрудниками антиспама забанены все сеошники.";
var t1=safe_plus(ressource['bydlo'],-(res_robot['work1']*robot_priest_kill-ressource['priest']))
news.value+="\nСотрудниками антиспама забанено "+(ressource['bydlo']-t1)+ " пользователей.";
ressource['bydlo']= t1;
ressource['priest']=0;}
else
{
news.value+="\nСотрудниками антиспама забанено "+ Math.ceil(res_robot['work1']*robot_priest_kill)+ "  сеошников.";
ressource['priest']=safe_plus(ressource['priest'],-res_robot['work1']*robot_priest_kill);}
}
news.value+="\n";

//Погромы
if (ressource['priest']>0)
{ressource['religion']+=ressource['priest'];
news.value+="\nСеошники произвели "+ (ressource['priest'])+ " спама.";}


var rel=ressource['religion'];
if (rel<0) rel=1/Math.abs(rel-1);
else rel=rel+1;
if (rel*ressource['bydlo']/(ressource['matan']+1)>0)
{
news.value+="\nВ результате бунтов уничтожено "+ (ressource['metan']-safe_plus(ressource['metan'],-rel*ressource['bydlo']/(ressource['matan']+1)))+ "M$  денег, "+ (ressource['matan']-safe_plus(ressource['matan'],-rel*ressource['bydlo']/(ressource['matan']+1)))+ "K строк кода.";
ressource['metan']=safe_plus(ressource['metan'],-rel*ressource['bydlo']/(ressource['matan']+1));
ressource['matan']=safe_plus(ressource['matan'],-rel*ressource['bydlo']/(ressource['matan']+1));
}
if (ressource['humanist']>0)
{
var t1=safe_plus(ressource['matan'],-(humanist_eat_matan*ressource['humanist']));
var t2=safe_plus(ressource['smeh'],-(humanist_eat_smeh*ressource['humanist']));
//alert(t2);
var t3=safe_plus(ressource['govno'],-(humanist_eat_shit*ressource['humanist']));
news.value+="\nСливателями уничтожено "+ (ressource['matan']-t1)+ "K строк кода, "+ (ressource['smeh']-t2)+ "  постов в блог.";
news.value+="\nСливателями обработано "+ (ressource['govno']-t3)+ "Пб  данных.";

ressource['matan']=t1;
ressource['smeh']=t2;
ressource['govno']=t3;
}
u1=false;
u2=false;
u3=false;
u4=false;
u5=false;
redraw_tr();

iteration++;
step_.innerHTML=iteration;
matan_dev[iteration]=ressource['matan'];
metan_dev[iteration]=ressource['metan'];
scientist_dev[iteration]=ressource['scientist'];
unhuman_dev[iteration]=ressource['unhuman'];
robot_dev[iteration]=ressource['robot'];
bydlo_dev[iteration]=ressource['bydlo'];
govno_dev[iteration]=ressource['govno'];
humanist_dev[iteration]=ressource['humanist'];
priest_dev[iteration]=ressource['priest'];
smeh_dev[iteration]=ressource['smeh'];

get_event(realt.checked);

if (ressource['bydlo']==0)
{
news.value+="\nПоздравяем! Развитие поиска и сопряженное с ним уход пользователей привели к эволюционному скачку!\n Вчерашнии разработчики переведены в пользователей, часть менеджеров стала разработчиками, часть слилась с антиспамом.\n Все сеошники и сливатели выброшены на свалку истории.";
ressource['bydlo']=ressource['scientist'];
ressource['scientist']=Math.ceil(ressource['unhuman']/2);
ressource['unhuman']=Math.ceil(ressource['unhuman']/2+ressource['robot']/2);
ressource['robot']=Math.ceil(ressource['robot']/2);
ressource['priest']=0;
ressource['humanist']=0;
}
reduce('scientist');
reduce('unhuman');
reduce('robot');

redraw_ressources();
redraw_graph();
if (realt.checked) setTimeout("next_it()", 1500);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upgrade_bio()
{
ressource['metan']-=(bioreactor_level+1)*50;
elements['metan'].innerHTML=ressource['metan'];
bioreactor_level++;
redraw_ressources();
u1=true;
redraw_tr();
upgrade_butt.disabled=true;
upgrade_div.innerHTML="<b>Обновление произведено</b>";

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upgrade_robot()
{
ressource['metan']-=(robot_level+1)*100+Math.pow(1.1, robot_level)-1;
robot_level++;
elements['metan'].innerHTML=ressource['metan'];
metan_robot_koeff=metan_robot_koeff*0.9;
bydlo_metan_koeff=bydlo_metan_koeff*1.1;
robot_priest_kill=robot_priest_kill*1.1;
ressource['robot']+=robot_level;
redraw_ressources();
u2=true;
redraw_tr();
upgrade_butt_r.disabled=true;
upgrade_div_r.innerHTML="<b>Обновление произведено</b>";
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upgrade_unhuman()
{
ressource['metan']-=unhuman_level*50;
unhuman_level++;
elements['metan'].innerHTML=ressource['metan'];

matan_unhuman_koeff=matan_unhuman_koeff*0.9;
unhuman_priest_kill=unhuman_priest_kill*1.1;

ressource['unhuman']+=unhuman_level;
redraw_ressources();
u3=true;
redraw_tr();
upgrade_butt_u.disabled=true;
upgrade_div_u.innerHTML="<b>Обновление произведено</b>";
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function call_rosatiy()
{
ressource['metan']+=ressource['bydlo']/2*bydlo_metan_koeff;
ressource['bydlo']=ressource['bydlo']/2;
rosatiy_l++;
redraw_ressources();
u4=true;
redraw_tr();
ros_but.disabled=true;
ros_div.innerHTML="<span class=\"failed\">Мы потеряли 50% пользователей, а империя получила много денег.</span>"
}

function upgrade_science()
{
ressource['metan']-=science_level*100;
science_level++;
elements['metan'].innerHTML=ressource['metan'];

matan_koeff=matan_koeff*1.1;

ressource['scientist']+=science_level;
redraw_ressources();
u5=true;
redraw_tr();
upgrade_butt_s.disabled=true;
upgrade_div_s.innerHTML="<b>Обновление произведено</b>";
}
