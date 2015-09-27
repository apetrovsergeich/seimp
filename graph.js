//Построение графиков, масштабирование
var mass;
var canv ;

var showmet;
var showmat;
var showrob;
var showunh;
var showscient;
var showpriest;
var showbydlo;
var showgovno;
var showhumanist;
var showsmeh;

var matan_dev=new Array;
var metan_dev=new Array;
var scientist_dev=new Array;
var unhuman_dev=new Array;
var robot_dev=new Array;
var bydlo_dev=new Array;
var govno_dev=new Array;
var humanist_dev=new Array;
var priest_dev=new Array;
var smeh_dev=new Array;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function init_graph()

{
ieCanvasInit();
canv = document.getElementById('canvas');
showmet = document.getElementById('#showmet');
showmat = document.getElementById('#showmat');
showrob = document.getElementById('#showrob');
showunh = document.getElementById('#showunh');
showscient = document.getElementById('#showscient');
showpriest = document.getElementById('#showpriest');
showbydlo = document.getElementById('#showbydlo');
showgovno = document.getElementById('#showgovno');
showhumanist = document.getElementById('#showhumanist');
showsmeh = document.getElementById('#showsmeh');
}

function redraw_graph()
{
var m;
for (i=0; i<mass.options.length; i++)
if (mass.options[i].selected) {m=mass.options[i].value; break;}

var ctx = canv.getContext('2d');

ctx.beginPath();
ctx.fillStyle="white";
ctx.fillRect(0, 0, 400, 350);
ctx.closePath();
ctx.stroke();

ctx.beginPath();

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.moveTo(0,350);
ctx.lineTo(400, 350);
ctx.moveTo(0,350);
ctx.lineTo(0,0);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
for (i=0; i<40; i++)
{
ctx.moveTo(i*10,345);
ctx.beginPath();
ctx.moveTo(i*10,345);
ctx.lineTo(i*10, 350);
ctx.closePath();
ctx.stroke();
}

for (i=0; i<35; i++)
{
ctx.moveTo(0,i*10);
ctx.beginPath();
ctx.moveTo(0,i*10);
ctx.lineTo(5, i*10);
ctx.closePath();
ctx.stroke();

}

var i1=1;

if (iteration>40)
i1=iteration-39;


if (showmat.checked)
{ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-matan_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-matan_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-matan_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showscient.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'orange';
for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-scientist_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-scientist_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-scientist_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showunh.checked)
{
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';
for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-unhuman_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-unhuman_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-unhuman_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showrob.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-robot_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-robot_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-robot_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showpriest.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'purple';

for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-priest_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-priest_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-priest_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showbydlo.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'black';

for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-bydlo_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-bydlo_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-bydlo_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showgovno.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';

for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-govno_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-govno_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-govno_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showhumanist.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'gray';

for (i=i1; i<=iteration; i++)
{
var i2=i-i1;

ctx.moveTo(2+(i2)*10, Math.ceil(350-humanist_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, Math.ceil(350-humanist_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,     Math.ceil(350-humanist_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}

if (showmet.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'green';

for (i=i1; i<=iteration; i++)
{
var i2=i-i1;
ctx.moveTo(2+(i2)*10, 350-Math.ceil(metan_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, 350-Math.ceil(metan_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,    350-Math.ceil(metan_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}
if (showsmeh.checked)
{ctx.lineWidth = 2;
ctx.strokeStyle = 'aqua';

for (i=i1; i<=iteration; i++)
{
var i2=i-i1;
ctx.moveTo(2+(i2)*10, 350-Math.ceil(smeh_dev[i-1]/m)-2);
ctx.beginPath();
ctx.moveTo(2+(i2)*10, 350-Math.ceil(smeh_dev[i-1]/m)-2);
ctx.lineTo(2+(i2+1)*10,    350-Math.ceil(smeh_dev[i]/m)-2);
ctx.closePath();
ctx.stroke();
}
}}