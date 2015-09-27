var event_names=new Array("warrax", "kuraev", "kirill", "schreiber", "alksnis", "holmogor");
var events={warrax:"Депутат Мизулина продолжила свою деятельность, смутив умы менеджеров и обратив их к патриотизму и исконным моральным ценностям.",
	    kuraev:"В Поисковую Империю проник Ашманов, привезший новую книгу про roem.ru и вызвавший резкую активизацию сеошников и сливателей.",
	    kirill:"В Поисковую Империю тайком пробрался отец Кирилл, переодетый в женское платье, и принялся уничтожать посты в блоге, что привело к распространению сео.",
	    schreiber:"Группа компаний seopult пробралась на habrahabr.ru и начла распространять сео среди пользователей. Обезумевшие люди принялись генерировать данные.",
	    alksnis:"Желающий отыграть позиции Mail.ru устроил смуту среди сотрудников антиспама. Сотрудники начали увольняться.",
	    holmogor:"Сергей Брин устроил беспрецедентную акцию по дистрибуции Гугла, замаскированную под детские утренники. В результате произошел массовый исход пользователей, повлекший утечку денег."}


var action={
warrax: function(){var tmp =ressource['unhuman']-safe_plus(ressource['unhuman'], -iteration/3); news.value +='\n'+tmp +' менеджеров уволилось и стало пользователями под впечатлением от очередного законопроекта депутата Мизулиной".'; ressource['bydlo']+=tmp;  ressource['unhuman']-=tmp; reduce('unhuman');},
kuraev:function(){ressource['priest']=safe_plus(ressource['priest'], iteration/3); ressource['humanist']=safe_plus(ressource['humanist'], iteration/3);news.value +='\nТлетворное влияние Ашманова увеличило количество сеошников и сливателей на '+Math.ceil(iteration/3);},
kirill: function(){var tmp=ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3); ressource['religion']+=Math.ceil(iteration/3); news.value +='\nТлетворное влияние отца Кирилла уничтожило '+(tmp)+' пост в блог и увеличило уровень спама на '+Math.ceil(iteration/3)+'.';ressource['smeh']-=tmp;},
schreiber: function(){var tmp=ressource['scientist']-safe_plus(ressource['scientist'], -Math.ceil(iteration/3)); ressource['govno']+=iteration*3; news.value +='\nПользователи, науськанные seopult истребили '+(tmp)+' разработчиков и оставили после себя '+iteration*3+ 'Пб данных.'; ressource['scientist']-=tmp;reduce('scientist');},
alksnis: function(){var tmp=ressource['robot']-safe_plus(ressource['robot'], -Math.ceil(iteration/3)); news.value +='\n'+(tmp)+' сотрудников антиспама уволилось в результате деятельности mail.ru.'; ressource['robot']-=tmp;reduce('robot');},
holmogor: function(){var tmp=ressource['metan']-safe_plus(ressource['metan'], -Math.ceil(iteration)); var tmp1=ressource['bydlo']-safe_plus(ressource['bydlo'], -Math.ceil(iteration)); news.value +='\n Было потеряно'+tmp+'M$ денег, ушло '+tmp1+' пользователей.'; ressource['metan']-=tmp;ressource['bydlo']-=tmp;}
}

var bonus={
warrax: function(){news.value +='\n В результате победы над Мизулиной было нанято '+Math.ceil(iteration/5)+' менеджеров.'; ressource['unhuman']+=Math.ceil(iteration/5);},
kuraev:function(){news.value +='\n В результате победы над Ашмановым было написано '+Math.ceil(iteration/3)+' постов в блог.'; ressource['smeh']+=Math.ceil(iteration/3);},
kirill: function(){news.value +='\n В результате победы над отцом Кириллом было написано '+Math.ceil(iteration/3)+' постов в блог.'; ressource['smeh']+=Math.ceil(iteration/3);},
schreiber: function(){news.value +='\n В результате победы над seopult было написано '+Math.ceil(iteration/5)+' постов в блог и '+Math.ceil(iteration/5)+'К строк кода.'; ressource['smeh']+=Math.ceil(iteration/5); ressource['matan']+=Math.ceil(iteration/5);},
alksnis: function(){news.value +='\n В результате победы над Mail.ru было нанято '+Math.ceil(iteration/5)+' сотрудников антиспама.'; ressource['robot']+=Math.ceil(iteration/5);},
holmogor: function(){news.value +='\n В результате победы над Сергеем Брином было заработано '+Math.ceil(iteration/3)+'M$ денег.'; ressource['metan']+=Math.ceil(iteration/3);}
}

var lost={
warrax: function(){var tmp =ressource['unhuman']-safe_plus(ressource['unhuman'], -iteration/3); var tmp1 =ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3);  news.value +='\n'+tmp +' менеджеров уволилось и стало пользователями под впечатлением от очередного законопроекта Мизулиной '+tmp1+' постов в блог уничтожено.' ; ressource['bydlo']+=tmp;  ressource['unhuman']-=tmp;  ressource['smeh']-=tmp1; reduce('unhuman');},
kuraev:function(){ressource['priest']=safe_plus(ressource['priest'], iteration/3); ressource['govno']=safe_plus(ressource['govno'], iteration*2); ressource['humanist']=safe_plus(ressource['humanist'], iteration/3);news.value +='\nТлетворное влияние Ашманова увеличило количество сеошников и сливателей на '+Math.ceil(iteration/3)+', сгенерировано ' + iteration*2+ 'Пб данных.';},
kirill: function(){var tmp1=ressource['scientist']-safe_plus(ressource['scientist'], -iteration/3); var tmp=ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3); ressource['religion']+=Math.ceil(iteration/3); news.value +='\nТлетворное влияние отца Кирилла уничтожило '+(tmp)+' постов в блог и повысилов уровень спама на '+Math.ceil(iteration/3)+'. '+tmp1+' разработчиков уволилось.';ressource['smeh']-=tmp; ressource['scientist']-=tmp1; reduce('scientist');},
schreiber: function(){var tmp=ressource['scientist']-safe_plus(ressource['scientist'], -Math.ceil(iteration/3)); var tmp1=ressource['matan']-safe_plus(ressource['matan'], -Math.ceil(iteration/3)); ressource['govno']+=iteration*3; news.value +='\nПользователи, науськанные Машой Шрайбер истребили '+(tmp)+' разработчиков и оставили после себя '+iteration*3+ 'Пб данных. '+tmp1+'К строк кода уничтожено.'; ressource['scientist']-=tmp; ressource['matan']-=tmp1; reduce('scientist');},
alksnis: function(){var tmp=ressource['robot']-safe_plus(ressource['robot'], -Math.ceil(iteration/3)); var tmp1=ressource['matan']-safe_plus(ressource['matan'], -Math.ceil(iteration/3)); news.value +='\n'+(tmp)+' сотрудников антиспама уволилось в результате агирации Mail.ru, ' +tmp1+ 'K строк кода уничтожено.'; ressource['robot']-=tmp;ressource['matan']-=tmp1;reduce('robot');},
holmogor: function(){var tmp=ressource['metan']-safe_plus(ressource['metan'], -Math.ceil(iteration)); var tmp1=ressource['bydlo']-safe_plus(ressource['bydlo'], -Math.ceil(iteration)); news.value +='\n Было потеряно'+tmp+'$M денег, ушло '+tmp1+' gjkmpjdfntktq, произведено '+iteration+' смапа.'; ressource['metan']-=tmp;ressource['bydlo']-=tmp;ressource['religion']+=iteration;}
}

var close_but;
var mess_window;
var messagetxt;
var messagebtn;
var pause=false;
var ev=0;
function load_window()
{
close_but=document.getElementById('#close_mess');
mess_window=document.getElementById('#messwin');
messagetxt=document.getElementById('#messagetxt');
messagebtn=document.getElementById('#messagebtn');


}

function close_window()
{
mess_window.style.display="none";

if (pause) {pause=false;setTimeout("next_it()", 1500); }

}

function get_event(rt)
{
ev=Math.floor(Math.random()*event_names.length*2);

if (ev<event_names.length)
{
if (rt)
pause=true;
mess_window.style.display="block";
messagetxt.innerHTML=events[event_names[ev]];
messagetxt.innerHTML+="<br><br><span style='font-size:12px;'>Помните, что проиграв бой, вы претерпите большый урон, чем избегнув его. Выигранная битва, в свою очередь, сулит определенные бонусы. <br></span>"
messagebtn.style.visibility="visible";
close_but.style.visibility="hidden";
}

}

function ignore_proc()
{
messagetxt.innerHTML="Вы отказались от боя.";
close_but.style.visibility="visible";
action[event_names[ev]]();
messagebtn.style.visibility="hidden";

}

function fight_proc()
{
messagetxt.innerHTML="Вы приняли битву...<br>";
close_but.style.visibility="visible";

if ((ressource['priest']+ressource['humanist'])*Math.random()<(ressource['robot']+ressource['unhuman'])*Math.random())
{
messagetxt.innerHTML+="<br>...и одержали победу!";

bonus[event_names[ev]]();
}
else
{
messagetxt.innerHTML+="<br>...и потерпели поражение.";

lost[event_names[ev]]();

}

messagebtn.style.visibility="hidden";
}
