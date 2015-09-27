var mess_window_s;
var savetxt;

function load_window_s()
{
mess_window_s=document.getElementById('#mess_window_s');
savetxt=document.getElementById('#savetxt');
}

function close_window_s()
{
mess_window_s.style.display="none";

}

function show_window_s()
{
realt.checked=false;
mess_window_s.style.display="block";
savetxt.value="";}

function extract_str(source)
{
var translate=source.split(";");
for (i=0; i<translate.length; i++)
{
eval(translate[i]+";");
}
redraw_ressources();

res_robot['d_work0'].value=res_robot['work0'];
res_robot['d_work1'].value=res_robot['work1'];
res_robot['d_work2'].value=res_robot['work2'];
res_scientist['d_work0'].value=res_scientist['work0'];
res_scientist['d_work1'].value=res_scientist['work1'];
res_scientist['d_work2'].value=res_scientist['work2'];
res_unhuman['d_work0'].value=res_unhuman['work0'];
res_unhuman['d_work1'].value=res_unhuman['work1'];
res_unhuman['d_work2'].value=res_unhuman['work2'];

redraw_tr();
redraw_graph();

news.value="Произведен возврат к ходу "+iteration+"\n";
step_.innerHTML=iteration;
close_window_s();
}

function create_string()
{
var str="";
//фыфыфыфыфыфыфы
str+="unhuman_level="+unhuman_level+";";
str+="robot_level="+robot_level+";";
str+="science_level="+science_level+";";
str+="rosatiy_l="+rosatiy_l+";";
str+="bioreactor_level="+bioreactor_level+";";
str+="iteration="+iteration+";";
str+="gov_to_met="+gov_to_met+";";
str+="g_t_m_koeff="+g_t_m_koeff+";";
str+="bb_koeff="+bb_koeff+";";
str+="bm_koeff="+bm_koeff+";";
str+="matan_koeff="+matan_koeff+";";
str+="matan_metan_koeff="+matan_metan_koeff+";";
str+="matan_scientist_koeff="+matan_scientist_koeff+";";
str+="smeh_koeff="+smeh_koeff+";";
str+="matan_unhuman_koeff="+matan_unhuman_koeff+";";
str+="metan_unhuman_koeff="+metan_unhuman_koeff+";";
str+="unhuman_priest_kill="+unhuman_priest_kill+";";
str+="robot_priest_kill="+robot_priest_kill+";";
str+="metan_robot_koeff="+metan_robot_koeff+";";
str+="bydlo_metan_koeff="+bydlo_metan_koeff+";";
str+="humanist_eat_shit="+humanist_eat_shit+";";
str+="humanist_eat_matan="+humanist_eat_matan+";";
str+="humanist_eat_smeh="+humanist_eat_smeh+";";

str+="ressource['metan']="+ressource['metan']+";";
str+="ressource['matan']="+ressource['matan']+";";
str+="ressource['govno']="+ressource['govno']+";";
str+="ressource['bydlo']="+ressource['bydlo']+";";
str+="ressource['scientist']="+ressource['scientist']+";";
str+="ressource['priest']="+ressource['priest']+";";
str+="ressource['robot']="+ressource['robot']+";";
str+="ressource['unhuman']="+ressource['unhuman']+";";
str+="ressource['religion']="+ressource['religion']+";";
str+="ressource['smeh']="+ressource['smeh']+";";
str+="ressource['humanist']="+ressource['humanist']+";";

str+="res_scientist['work0']="+res_scientist['work0']+";";
str+="res_scientist['work1']="+res_scientist['work1']+";";
str+="res_scientist['work2']="+res_scientist['work2']+";";

str+="res_robot['work0']="+res_robot['work0']+";";
str+="res_robot['work1']="+res_robot['work1']+";";
str+="res_robot['work2']="+res_robot['work2']+";";

str+="res_unhuman['work0']="+res_unhuman['work0']+";";
str+="res_unhuman['work1']="+res_unhuman['work1']+";";
str+="res_unhuman['work2']="+res_unhuman['work2']+";";

str+="matan_dev= new Array("+matan_dev[0];
for (i=0; i<iteration; i++)
str+=", "+matan_dev[i];
str+=");";

str+="scientist_dev= new Array("+scientist_dev[0];
for (i=0; i<iteration; i++)
str+=", "+scientist_dev[i];
str+=");";

str+="unhuman_dev= new Array("+unhuman_dev[0];
for (i=0; i<iteration; i++)
str+=", "+unhuman_dev[i];
str+=");";

str+="robot_dev= new Array("+robot_dev[0];
for (i=0; i<iteration; i++)
str+=", "+robot_dev[i];
str+=");";

str+="bydlo_dev= new Array("+bydlo_dev[0];
for (i=0; i<iteration; i++)
str+=", "+bydlo_dev[i];
str+=");";

str+="govno_dev= new Array("+govno_dev[0];
for (i=0; i<iteration; i++)
str+=", "+govno_dev[i];
str+=");";

str+="humanist_dev= new Array("+humanist_dev[0];
for (i=0; i<iteration; i++)
str+=", "+humanist_dev[i];
str+=");";

str+="priest_dev= new Array("+priest_dev[0];
for (i=0; i<iteration; i++)
str+=", "+priest_dev[i];
str+=");";

str+="smeh_dev=new Array("+smeh_dev[0];
for (i=0; i<iteration; i++)
str+=", "+smeh_dev[i];
str+=");";

return str;
};
