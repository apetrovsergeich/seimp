var event_names=new Array("warrax", "kuraev", "kirill", "schreiber", "alksnis", "holmogor");
var events={warrax:"������� �������� ���������� ���� ������������, ������ ��� ���������� � ������� �� � ����������� � �������� ��������� ���������.",
	    kuraev:"� ��������� ������� ������ �������, ��������� ����� ����� ��� roem.ru � ��������� ������ ����������� ��������� � ����������.",
	    kirill:"� ��������� ������� ������ ��������� ���� ������, ���������� � ������� ������, � �������� ���������� ����� � �����, ��� ������� � ��������������� ���.",
	    schreiber:"������ �������� seopult ���������� �� habrahabr.ru � ����� �������������� ��� ����� �������������. ����������� ���� ��������� ������������ ������.",
	    alksnis:"�������� �������� ������� Mail.ru ������� ����� ����� ����������� ���������. ���������� ������ �����������.",
	    holmogor:"������ ���� ������� ��������������� ����� �� ����������� �����, ��������������� ��� ������� ���������. � ���������� ��������� �������� ����� �������������, ��������� ������ �����."}


var action={
warrax: function(){var tmp =ressource['unhuman']-safe_plus(ressource['unhuman'], -iteration/3); news.value +='\n'+tmp +' ���������� ��������� � ����� �������������� ��� ������������ �� ���������� ������������� �������� ���������".'; ressource['bydlo']+=tmp;  ressource['unhuman']-=tmp; reduce('unhuman');},
kuraev:function(){ressource['priest']=safe_plus(ressource['priest'], iteration/3); ressource['humanist']=safe_plus(ressource['humanist'], iteration/3);news.value +='\n���������� ������� �������� ��������� ���������� ��������� � ���������� �� '+Math.ceil(iteration/3);},
kirill: function(){var tmp=ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3); ressource['religion']+=Math.ceil(iteration/3); news.value +='\n���������� ������� ���� ������� ���������� '+(tmp)+' ���� � ���� � ��������� ������� ����� �� '+Math.ceil(iteration/3)+'.';ressource['smeh']-=tmp;},
schreiber: function(){var tmp=ressource['scientist']-safe_plus(ressource['scientist'], -Math.ceil(iteration/3)); ressource['govno']+=iteration*3; news.value +='\n������������, ����������� seopult ��������� '+(tmp)+' ������������� � �������� ����� ���� '+iteration*3+ '�� ������.'; ressource['scientist']-=tmp;reduce('scientist');},
alksnis: function(){var tmp=ressource['robot']-safe_plus(ressource['robot'], -Math.ceil(iteration/3)); news.value +='\n'+(tmp)+' ����������� ��������� ��������� � ���������� ������������ mail.ru.'; ressource['robot']-=tmp;reduce('robot');},
holmogor: function(){var tmp=ressource['metan']-safe_plus(ressource['metan'], -Math.ceil(iteration)); var tmp1=ressource['bydlo']-safe_plus(ressource['bydlo'], -Math.ceil(iteration)); news.value +='\n ���� ��������'+tmp+'M$ �����, ���� '+tmp1+' �������������.'; ressource['metan']-=tmp;ressource['bydlo']-=tmp;}
}

var bonus={
warrax: function(){news.value +='\n � ���������� ������ ��� ��������� ���� ������ '+Math.ceil(iteration/5)+' ����������.'; ressource['unhuman']+=Math.ceil(iteration/5);},
kuraev:function(){news.value +='\n � ���������� ������ ��� ��������� ���� �������� '+Math.ceil(iteration/3)+' ������ � ����.'; ressource['smeh']+=Math.ceil(iteration/3);},
kirill: function(){news.value +='\n � ���������� ������ ��� ����� �������� ���� �������� '+Math.ceil(iteration/3)+' ������ � ����.'; ressource['smeh']+=Math.ceil(iteration/3);},
schreiber: function(){news.value +='\n � ���������� ������ ��� seopult ���� �������� '+Math.ceil(iteration/5)+' ������ � ���� � '+Math.ceil(iteration/5)+'� ����� ����.'; ressource['smeh']+=Math.ceil(iteration/5); ressource['matan']+=Math.ceil(iteration/5);},
alksnis: function(){news.value +='\n � ���������� ������ ��� Mail.ru ���� ������ '+Math.ceil(iteration/5)+' ����������� ���������.'; ressource['robot']+=Math.ceil(iteration/5);},
holmogor: function(){news.value +='\n � ���������� ������ ��� ������� ������ ���� ���������� '+Math.ceil(iteration/3)+'M$ �����.'; ressource['metan']+=Math.ceil(iteration/3);}
}

var lost={
warrax: function(){var tmp =ressource['unhuman']-safe_plus(ressource['unhuman'], -iteration/3); var tmp1 =ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3);  news.value +='\n'+tmp +' ���������� ��������� � ����� �������������� ��� ������������ �� ���������� ������������� ��������� '+tmp1+' ������ � ���� ����������.' ; ressource['bydlo']+=tmp;  ressource['unhuman']-=tmp;  ressource['smeh']-=tmp1; reduce('unhuman');},
kuraev:function(){ressource['priest']=safe_plus(ressource['priest'], iteration/3); ressource['govno']=safe_plus(ressource['govno'], iteration*2); ressource['humanist']=safe_plus(ressource['humanist'], iteration/3);news.value +='\n���������� ������� �������� ��������� ���������� ��������� � ���������� �� '+Math.ceil(iteration/3)+', ������������� ' + iteration*2+ '�� ������.';},
kirill: function(){var tmp1=ressource['scientist']-safe_plus(ressource['scientist'], -iteration/3); var tmp=ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3); ressource['religion']+=Math.ceil(iteration/3); news.value +='\n���������� ������� ���� ������� ���������� '+(tmp)+' ������ � ���� � ��������� ������� ����� �� '+Math.ceil(iteration/3)+'. '+tmp1+' ������������� ���������.';ressource['smeh']-=tmp; ressource['scientist']-=tmp1; reduce('scientist');},
schreiber: function(){var tmp=ressource['scientist']-safe_plus(ressource['scientist'], -Math.ceil(iteration/3)); var tmp1=ressource['matan']-safe_plus(ressource['matan'], -Math.ceil(iteration/3)); ressource['govno']+=iteration*3; news.value +='\n������������, ����������� ����� ������� ��������� '+(tmp)+' ������������� � �������� ����� ���� '+iteration*3+ '�� ������. '+tmp1+'� ����� ���� ����������.'; ressource['scientist']-=tmp; ressource['matan']-=tmp1; reduce('scientist');},
alksnis: function(){var tmp=ressource['robot']-safe_plus(ressource['robot'], -Math.ceil(iteration/3)); var tmp1=ressource['matan']-safe_plus(ressource['matan'], -Math.ceil(iteration/3)); news.value +='\n'+(tmp)+' ����������� ��������� ��������� � ���������� �������� Mail.ru, ' +tmp1+ 'K ����� ���� ����������.'; ressource['robot']-=tmp;ressource['matan']-=tmp1;reduce('robot');},
holmogor: function(){var tmp=ressource['metan']-safe_plus(ressource['metan'], -Math.ceil(iteration)); var tmp1=ressource['bydlo']-safe_plus(ressource['bydlo'], -Math.ceil(iteration)); news.value +='\n ���� ��������'+tmp+'$M �����, ���� '+tmp1+' gjkmpjdfntktq, ����������� '+iteration+' �����.'; ressource['metan']-=tmp;ressource['bydlo']-=tmp;ressource['religion']+=iteration;}
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
messagetxt.innerHTML+="<br><br><span style='font-size:12px;'>�������, ��� �������� ���, �� ���������� ������� ����, ��� �������� ���. ���������� �����, � ���� �������, ����� ������������ ������. <br></span>"
messagebtn.style.visibility="visible";
close_but.style.visibility="hidden";
}

}

function ignore_proc()
{
messagetxt.innerHTML="�� ���������� �� ���.";
close_but.style.visibility="visible";
action[event_names[ev]]();
messagebtn.style.visibility="hidden";

}

function fight_proc()
{
messagetxt.innerHTML="�� ������� �����...<br>";
close_but.style.visibility="visible";

if ((ressource['priest']+ressource['humanist'])*Math.random()<(ressource['robot']+ressource['unhuman'])*Math.random())
{
messagetxt.innerHTML+="<br>...� �������� ������!";

bonus[event_names[ev]]();
}
else
{
messagetxt.innerHTML+="<br>...� ��������� ���������.";

lost[event_names[ev]]();

}

messagebtn.style.visibility="hidden";
}
