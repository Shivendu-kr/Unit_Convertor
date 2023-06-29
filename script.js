var Len,Mas,Tim,Tem,Ar,Vol,Spd,Men;

function showMenu(){
    Men=document.getElementById("menu");
    Len=document.getElementById("length");
    Mas=document.getElementById("mass");
    Tim=document.getElementById("time");
    Tem=document.getElementById("temperature");
    Ar=document.getElementById("area");
    Vol=document.getElementById("volume");
    Spd=document.getElementById("speed");
    Men.style.display="block";
    Len.style.display="none";
    Mas.style.display="none";
    Tim.style.display="none";
    Tem.style.display="none";
    Ar.style.display="none";
    Vol.style.display="none";
    Spd.style.display="none";
}

function showLen(){
    Men=document.getElementById("menu");
    Len=document.getElementById("length");
    Men.style.display="none";
    Len.style.display="block";
}

function showMas(){
    Men=document.getElementById("menu");
    Mas=document.getElementById("mass");
    Men.style.display="none";
    Mas.style.display="block";
}

function showTim(){
    Men=document.getElementById("menu");
    Tim=document.getElementById("time");
    Men.style.display="none";
    Tim.style.display="block";
}

function showTemp(){
    Men=document.getElementById("menu");
    Tem=document.getElementById("temperature");
    Men.style.display="none";
    Tem.style.display="block";
}

function showAr(){
    Men=document.getElementById("menu");
    Ar=document.getElementById("area");
    Men.style.display="none";
    Ar.style.display="block";
}

function showVol(){
    Men=document.getElementById("menu");
    Vol=document.getElementById("volume");
    Men.style.display="none";
    Vol.style.display="block";
}

function showSpd(){
    Men=document.getElementById("menu");
    Spd=document.getElementById("speed");
    Men.style.display="none";
    Spd.style.display="block";
}

var inp=0,res=0,f=0,t=0;

function choosel(){
var a=document.getElementById("froml");
f= a.options[a.selectedIndex].value; 

var b=document.getElementById("tol");
t= b.options[b.selectedIndex].value; 

inp=document.getElementById("inputl").value;
}

function metre(){
if (t==2){ res=inp/1000; document.getElementById("ans").innerHTML=inp+" m is equal to "+res+" km."; }
else if (t==3){ res=inp*39.3701; document.getElementById("ans").innerHTML=inp+" m is equal to "+res+" in."; }
else if (t==4){ res=inp*3.28084; document.getElementById("ans").innerHTML=inp+" m is equal to "+res+" ft."; }
else if (t==5){ res=inp*0.00062137121; document.getElementById("ans").innerHTML=inp+" m is equal to "+res+" mi."; }
else if (t==6){ res=inp*1.0936; document.getElementById("ans").innerHTML=inp+" m is equal to "+res+" yd."; }
else if (t==7){ res=inp*100; document.getElementById("ans").innerHTML=inp+" m is equal to "+res+" cm."; }
else if (t==8){ res=inp*0.000539957; document.getElementById("ans").innerHTML=inp+" m is equal to "+res+" nm."; }
}

function kilometre(){
if (t==1){ res=inp*1000; document.getElementById("ans").innerHTML=inp+" km is equal to "+res+" m."; }
else if (t==3){ res=inp*39370.1; document.getElementById("ans").innerHTML=inp+" km is equal to "+res+" in."; }
else if (t==4){ res=inp*3280.84; document.getElementById("ans").innerHTML=inp+" km is equal to "+res+" ft."; }
else if (t==5){ res=inp*0.6214; document.getElementById("ans").innerHTML=inp+" km is equal to "+res+" mi."; }
else if (t==6){ res=inp*1093.6139; document.getElementById("ans").innerHTML=inp+" km is equal to "+res+" yd."; }
else if (t==7){ res=inp*100000; document.getElementById("ans").innerHTML=inp+" km is equal to "+res+" cm."; }
else if (t==8){ res=inp*0.539957; document.getElementById("ans").innerHTML=inp+" km is equal to "+res+" nm."; }
}

function inch(){
if (t==1){ res=inp*0.0254; document.getElementById("ans").innerHTML=inp+" in is equal to "+res+" m."; }
else if (t==2){ res=inp/39370.1; document.getElementById("ans").innerHTML=inp+" in is equal to "+res+" km."; }
else if (t==4){ res=inp/12; document.getElementById("ans").innerHTML=inp+" in is equal to "+res+" ft."; }
else if (t==5){ res=inp/63360.034; document.getElementById("ans").innerHTML=inp+" in is equal to "+res+" mi."; }
else if (t==6){ res=inp*0.0278; document.getElementById("ans").innerHTML=inp+" in is equal to "+res+" yd."; }
else if (t==7){ res=inp*2.54; document.getElementById("ans").innerHTML=inp+" in is equal to "+res+" cm."; }
else if (t==8){ res=inp/72913.41; document.getElementById("ans").innerHTML=inp+" in is equal to "+res+" nm."; }
}

function feet(){
if (t==1){ res=inp*0.3048; document.getElementById("ans").innerHTML=inp+" ft is equal to "+res+" m."; }
else if (t==2){ res=inp*0.0003048; document.getElementById("ans").innerHTML=inp+" ft is equal to "+res+" km."; }
else if (t==3){ res=inp*12; document.getElementById("ans").innerHTML=inp+" ft is equal to "+res+" in."; }
else if (t==5){ res=inp/5280; document.getElementById("ans").innerHTML=inp+" ft is equal to "+res+" mi."; }
else if (t==6){ res=inp/3; document.getElementById("ans").innerHTML=inp+" ft is equal to "+res+" yd."; }
else if (t==7){ res=inp*30.48; document.getElementById("ans").innerHTML=inp+" ft is equal to "+res+" cm."; }
else if (t==8){ res=inp*0.0001646; document.getElementById("ans").innerHTML=inp+" ft is equal to "+res+" nm."; }
}

function mile(){
if (t==1){ res=inp*1609.34; document.getElementById("ans").innerHTML=inp+" mi is equal to "+res+" m."; }
else if (t==2){ res=inp*1.6093; document.getElementById("ans").innerHTML=inp+" mi is equal to "+res+" km."; }
else if (t==3){ res=inp*63360.034; document.getElementById("ans").innerHTML=inp+" mi is equal to "+res+" in."; }
else if (t==4){ res=inp*5280; document.getElementById("ans").innerHTML=inp+" mi is equal to "+res+" ft."; }
else if (t==6){ res=inp*1760; document.getElementById("ans").innerHTML=inp+" mi is equal to "+res+" yd."; }
else if (t==7){ res=inp*160934.4869; document.getElementById("ans").innerHTML=inp+" mi is equal to "+res+" cm."; }
else if (t==8){ res=inp*0.86898; document.getElementById("ans").innerHTML=inp+" mi is equal to "+res+" nm."; }
}

function yard(){
if (t==1){ res=inp*0.9144; document.getElementById("ans").innerHTML=inp+" yd is equal to "+res+" m."; }
else if (t==2){ res=inp*0.0009144; document.getElementById("ans").innerHTML=inp+" yd is equal to "+res+" km."; }
else if (t==3){ res=inp*36; document.getElementById("ans").innerHTML=inp+" yd is equal to "+res+" in."; }
else if (t==4){ res=inp*3; document.getElementById("ans").innerHTML=inp+" yd is equal to "+res+" ft."; }
else if (t==5){ res=inp/1760; document.getElementById("ans").innerHTML=inp+" yd is equal to "+res+" mi."; }
else if (t==7){ res=inp*91.44; document.getElementById("ans").innerHTML=inp+" yd is equal to "+res+" cm."; }
else if (t==8){ res=inp*0.0004937; document.getElementById("ans").innerHTML=inp+" yd is equal to "+res+" nm."; }
}

function centi(){
if (t==1){ res=inp/100; document.getElementById("ans").innerHTML=inp+" cm is equal to "+res+" m."; }
else if (t==2){ res=inp/100000; document.getElementById("ans").innerHTML=inp+" cm is equal to "+res+" km."; }
else if (t==3){ res=inp*0.3937; document.getElementById("ans").innerHTML=inp+" cm is equal to "+res+" in."; }
else if (t==4){ res=inp*0.03281; document.getElementById("ans").innerHTML=inp+" cm is equal to "+res+" ft."; }
else if (t==5){ res=inp/160934.49; document.getElementById("ans").innerHTML=inp+" cm is equal to "+res+" mi."; }
else if (t==6){ res=inp*0.010936; document.getElementById("ans").innerHTML=inp+" cm is equal to "+res+" yd."; }
else if (t==8){ res=inp/185200.187; document.getElementById("ans").innerHTML=inp+" cm is equal to "+res+" nm."; }
}

function nautical(){
if (t==1){ res=inp*1852.00187; document.getElementById("ans").innerHTML=inp+" nm is equal to "+res+" m."; }
else if (t==2){ res=inp*1.852; document.getElementById("ans").innerHTML=inp+" nm is equal to "+res+" km."; }
else if (t==3){ res=inp*72913.46; document.getElementById("ans").innerHTML=inp+" nm is equal to "+res+" in."; }
else if (t==4){ res=inp*6076.12; document.getElementById("ans").innerHTML=inp+" nm is equal to "+res+" ft."; }
else if (t==5){ res=inp*1.15078; document.getElementById("ans").innerHTML=inp+" nm is equal to "+res+" mi."; }
else if (t==6){ res=inp*2025.3739; document.getElementById("ans").innerHTML=inp+" nm is equal to "+res+" yd."; }
else if (t==7){ res=inp*185200.187; document.getElementById("ans").innerHTML=inp+" nm is equal to "+res+" cm."; }
}

function resultLen()
{
    choosel();
    if (inp==0){ document.getElementById("ans").innerHTML="Plese enter the amount you want to convert!!"; } 
    else if (inp<0){ document.getElementById("ans").innerHTML="Plese enter the positive number!!"; }
    else if(f==t){ document.getElementById("ans").innerHTML="You can't convert to the same unit!!"; }
    else if(f==1){ metre(); }
    else if(f==2){ kilometre(); }
    else if(f==3){ inch(); }
    else if(f==4){ feet(); }
    else if(f==5){ mile(); }
    else if(f==6){ yard(); }
    else if(f==7){ centi(); }
    else if(f==8){ nautical(); }
    
    inp=0;
    res=0;
}






function choosem(){
var a=document.getElementById("fromm");
f= a.options[a.selectedIndex].value; 

var b=document.getElementById("tom");
t= b.options[b.selectedIndex].value; 

inp=document.getElementById("inputm").value;
}

function gram(){
if (t==2){ res=inp/1000; document.getElementById("ansm").innerHTML=inp+" g is equal to "+res+" kg."; }
else if (t==3){ res=inp*1000; document.getElementById("ansm").innerHTML=inp+" g is equal to "+res+" mg."; }
else if (t==4){ res=inp*0.00220462; document.getElementById("ansm").innerHTML=inp+" g is equal to "+res+" lb."; }
else if (t==5){ res=inp*0.035274; document.getElementById("ansm").innerHTML=inp+" g is equal to "+res+" oz."; }
else if (t==6){ res=inp/1016045.7; document.getElementById("ansm").innerHTML=inp+" g is equal to "+res+" imperial ton."; }
else if (t==7){ res=inp/907185; document.getElementById("ansm").innerHTML=inp+" g is equal to "+res+" us ton."; }
else if (t==8){ res=inp/1000000; document.getElementById("ansm").innerHTML=inp+" g is equal to "+res+" metric tonne."; }
}

function kilogram(){
if (t==1){ res=inp*1000; document.getElementById("ansm").innerHTML=inp+" kg is equal to "+res+" g."; }
else if (t==3){ res=inp*1000000; document.getElementById("ansm").innerHTML=inp+" kg is equal to "+res+" mg."; }
else if (t==4){ res=inp*2.20462; document.getElementById("ansm").innerHTML=inp+" kg is equal to "+res+" lb."; }
else if (t==5){ res=inp*35.2739; document.getElementById("ansm").innerHTML=inp+" kg is equal to "+res+" oz."; }
else if (t==6){ res=inp*0.0009842; document.getElementById("ansm").innerHTML=inp+" kg is equal to "+res+" imperial ton."; }
else if (t==7){ res=inp*0.001102312; document.getElementById("ansm").innerHTML=inp+" kg is equal to "+res+" us ton."; }
else if (t==8){ res=inp/1000; document.getElementById("ansm").innerHTML=inp+" kg is equal to "+res+" metric tonne."; }
}

function milligram(){
if (t==1){ res=inp/1000; document.getElementById("ansm").innerHTML=inp+" mg is equal to "+res+" g."; }
else if (t==2){ res=inp/1000000; document.getElementById("ansm").innerHTML=inp+" mg is equal to "+res+" kg."; }
else if (t==4){ res=inp/453592; document.getElementById("ansm").innerHTML=inp+" mg is equal to "+res+" lb."; }
else if (t==5){ res=inp/28349.5; document.getElementById("ansm").innerHTML=inp+" mg is equal to "+res+" oz."; }
else if (t==6){ res=inp/1016046080; document.getElementById("ansm").innerHTML=inp+" mg is equal to "+res+" imperial ton."; }
else if (t==7){ res=inp/907200000; document.getElementById("ansm").innerHTML=inp+" mg is equal to "+res+" us ton."; }
else if (t==8){ res=inp/1000000000; document.getElementById("ansm").innerHTML=inp+" mg is equal to "+res+" metric tonne."; }
}

function pound(){
if (t==1){ res=inp/0.00220462; document.getElementById("ansm").innerHTML=inp+" lb is equal to "+res+" g."; }
else if (t==2){ res=inp/2.20462; document.getElementById("ansm").innerHTML=inp+" lb is equal to "+res+" kg."; }
else if (t==3){ res=inp*453592; document.getElementById("ansm").innerHTML=inp+" lb is equal to "+res+" mg."; }
else if (t==5){ res=inp*16; document.getElementById("ansm").innerHTML=inp+" lb is equal to "+res+" oz."; }
else if (t==6){ res=inp*0.000446429; document.getElementById("ansm").innerHTML=inp+" lb is equal to "+res+" imperial ton."; }
else if (t==7){ res=inp*0.0005; document.getElementById("ansm").innerHTML=inp+" lb is equal to "+res+" us ton."; }
else if (t==8){ res=inp*0.000453592; document.getElementById("ansm").innerHTML=inp+" lb is equal to "+res+" metric tonne."; }
}

function ounce(){
if (t==1){ res=inp/0.035274; document.getElementById("ansm").innerHTML=inp+" oz is equal to "+res+" g."; }
else if (t==2){ res=inp/35.2739; document.getElementById("ansm").innerHTML=inp+" oz is equal to "+res+" kg."; }
else if (t==3){ res=inp*28349.5; document.getElementById("ansm").innerHTML=inp+" oz is equal to "+res+" mg."; }
else if (t==4){ res=inp/16; document.getElementById("ansm").innerHTML=inp+" oz is equal to "+res+" lb."; }
else if (t==6){ res=inp/35839.97; document.getElementById("ansm").innerHTML=inp+" oz is equal to "+res+" imperial ton."; }
else if (t==7){ res=inp/32000; document.getElementById("ansm").innerHTML=inp+" oz is equal to "+res+" us ton."; }
else if (t==8){ res=inp/35274; document.getElementById("ansm").innerHTML=inp+" oz is equal to "+res+" metric tonne."; }
}

function imperial(){
if (t==1){ res=inp*1016045.7; document.getElementById("ansm").innerHTML=inp+" imperial ton is equal to "+res+" g."; }
else if (t==2){ res=inp/0.0009842; document.getElementById("ansm").innerHTML=inp+" imperial ton is equal to "+res+" kg."; }
else if (t==3){ res=inp*1016046080; document.getElementById("ansm").innerHTML=inp+" imperial ton is equal to "+res+" mg."; }
else if (t==4){ res=inp/0.000446429; document.getElementById("ansm").innerHTML=inp+" imperial ton is equal to "+res+" lb."; }
else if (t==5){ res=inp*35839.97; document.getElementById("ansm").innerHTML=inp+" imperial ton is equal to "+res+" oz."; }
else if (t==7){ res=inp*1.12; document.getElementById("ansm").innerHTML=inp+" imperial ton is equal to "+res+" us ton."; }
else if (t==8){ res=inp*1.01605; document.getElementById("ansm").innerHTML=inp+" imperial ton is equal to "+res+" metric tonne."; }
}

function us(){
if (t==1){ res=inp*907185; document.getElementById("ansm").innerHTML=inp+" us ton is equal to "+res+" g."; }
else if (t==2){ res=inp/0.001102312; document.getElementById("ansm").innerHTML=inp+" us ton is equal to "+res+" kg."; }
else if (t==3){ res=inp*907200000; document.getElementById("ansm").innerHTML=inp+" us ton is equal to "+res+" mg."; }
else if (t==4){ res=inp/0.0005; document.getElementById("ansm").innerHTML=inp+" us ton is equal to "+res+" lb."; }
else if (t==5){ res=inp*32000; document.getElementById("ansm").innerHTML=inp+" us ton is equal to "+res+" oz."; }
else if (t==6){ res=inp/1.12; document.getElementById("ansm").innerHTML=inp+" us ton is equal to "+res+" imperial ton."; }
else if (t==8){ res=inp*0.907185; document.getElementById("ansm").innerHTML=inp+" us ton is equal to "+res+" metric tonne."; }
}

function tonne(){
if (t==1){ res=inp*1000000; document.getElementById("ansm").innerHTML=inp+" metric tonne is equal to "+res+" g."; }
else if (t==2){ res=inp*1000; document.getElementById("ansm").innerHTML=inp+" metric tonne is equal to "+res+" kg."; }
else if (t==3){ res=inp*1000000000; document.getElementById("ansm").innerHTML=inp+" metric tonne is equal to "+res+" mg."; }
else if (t==4){ res=inp/0.000453592; document.getElementById("ansm").innerHTML=inp+" metric tonne is equal to "+res+" lb."; }
else if (t==5){ res=inp*35274; document.getElementById("ansm").innerHTML=inp+" metric tonne is equal to "+res+" oz."; }
else if (t==6){ res=inp/1.01605; document.getElementById("ansm").innerHTML=inp+" metric tonne is equal to "+res+" imperial ton."; }
else if (t==7){ res=inp/0.907185; document.getElementById("ansm").innerHTML=inp+" metric tonne is equal to "+res+" us ton."; }
}

function resultMas()
{
    choosem();
    if (inp==0){ document.getElementById("ansm").innerHTML="Plese enter the amount you want to convert!!"; } 
    else if (inp<0){ document.getElementById("ansm").innerHTML="Plese enter the positive number!!"; }
    else if(f==t){ document.getElementById("ansm").innerHTML="You can't convert to the same unit!!"; }
    else if(f==1){ gram(); }
    else if(f==2){ kilogram(); }
    else if(f==3){ milligram(); }
    else if(f==4){ pound(); }
    else if(f==5){ ounce(); }
    else if(f==6){ imperial(); }
    else if(f==7){ us(); }
    else if(f==8){ tonne(); }
    
    inp=0;
    res=0;
}





function chooseti(){
var a=document.getElementById("fromti");
f= a.options[a.selectedIndex].value; 

var b=document.getElementById("toti");
t= b.options[b.selectedIndex].value; 

inp=document.getElementById("inputti").value;
}

function second(){
if (t==2){ res=inp/60; document.getElementById("ansti").innerHTML=inp+" s is equal to "+res+" m."; }
else if (t==3){ res=inp/3600; document.getElementById("ansti").innerHTML=inp+" s is equal to "+res+" h."; }
else if (t==4){ res=inp/86400; document.getElementById("ansti").innerHTML=inp+" s is equal to "+res+" d."; }
else if (t==5){ res=inp/604800; document.getElementById("ansti").innerHTML=inp+" s is equal to "+res+" week."; }
else if (t==6){ res=inp/2628000; document.getElementById("ansti").innerHTML=inp+" s is equal to "+res+" month."; }
else if (t==7){ res=inp/31540000; document.getElementById("ansti").innerHTML=inp+" s is equal to "+res+" year."; }
}

function minute(){
if (t==1){ res=inp*60; document.getElementById("ansti").innerHTML=inp+" m is equal to "+res+" s."; }
else if (t==3){ res=inp/60; document.getElementById("ansti").innerHTML=inp+" m is equal to "+res+" h."; }
else if (t==4){ res=inp/1440; document.getElementById("ansti").innerHTML=inp+" m is equal to "+res+" d."; }
else if (t==5){ res=inp/10080; document.getElementById("ansti").innerHTML=inp+" m is equal to "+res+" week."; }
else if (t==6){ res=inp/43800; document.getElementById("ansti").innerHTML=inp+" m is equal to "+res+" month."; }
else if (t==7){ res=inp/525600; document.getElementById("ansti").innerHTML=inp+" m is equal to "+res+" year."; }
}

function hour(){
if (t==1){ res=inp*3600; document.getElementById("ansti").innerHTML=inp+" h is equal to "+res+" s."; }
else if (t==2){ res=inp*60; document.getElementById("ansti").innerHTML=inp+" h is equal to "+res+" m."; }
else if (t==4){ res=inp/24; document.getElementById("ansti").innerHTML=inp+" h is equal to "+res+" d."; }
else if (t==5){ res=inp/168; document.getElementById("ansti").innerHTML=inp+" h is equal to "+res+" week."; }
else if (t==6){ res=inp/730.001; document.getElementById("ansti").innerHTML=inp+" h is equal to "+res+" month."; }
else if (t==7){ res=inp/8760; document.getElementById("ansti").innerHTML=inp+" h is equal to "+res+" year."; }
}

function day(){
if (t==1){ res=inp*86400; document.getElementById("ansti").innerHTML=inp+" d is equal to "+res+" s."; }
else if (t==2){ res=inp*1440; document.getElementById("ansti").innerHTML=inp+" d is equal to "+res+" m."; }
else if (t==3){ res=inp*24; document.getElementById("ansti").innerHTML=inp+" d is equal to "+res+" h."; }
else if (t==5){ res=inp/7; document.getElementById("ansti").innerHTML=inp+" d is equal to "+res+" week."; }
else if (t==6){ res=inp/30.4162; document.getElementById("ansti").innerHTML=inp+" d is equal to "+res+" month."; }
else if (t==7){ res=inp/365; document.getElementById("ansti").innerHTML=inp+" d is equal to "+res+" year."; }
}

function week(){
if (t==1){ res=inp*604800; document.getElementById("ansti").innerHTML=inp+" week is equal to "+res+" s."; }
else if (t==2){ res=inp*10080; document.getElementById("ansti").innerHTML=inp+" week is equal to "+res+" m."; }
else if (t==3){ res=inp*168; document.getElementById("ansti").innerHTML=inp+" week is equal to "+res+" h."; }
else if (t==4){ res=inp*7; document.getElementById("ansti").innerHTML=inp+" week is equal to "+res+" d."; }
else if (t==6){ res=inp/4.34524; document.getElementById("ansti").innerHTML=inp+" week is equal to "+res+" month."; }
else if (t==7){ res=inp/52.1429; document.getElementById("ansti").innerHTML=inp+" week is equal to "+res+" year."; }
}

function month(){
if (t==1){ res=inp*2628000; document.getElementById("ansti").innerHTML=inp+" month is equal to "+res+" s."; }
else if (t==2){ res=inp*43800; document.getElementById("ansti").innerHTML=inp+" month is equal to "+res+" m."; }
else if (t==3){ res=inp*730.001; document.getElementById("ansti").innerHTML=inp+" month is equal to "+res+" h."; }
else if (t==4){ res=inp*30.4162; document.getElementById("ansti").innerHTML=inp+" month is equal to "+res+" d."; }
else if (t==5){ res=inp*4.34524; document.getElementById("ansti").innerHTML=inp+" month is equal to "+res+" week."; }
else if (t==7){ res=inp/12; document.getElementById("ansti").innerHTML=inp+" month is equal to "+res+" year."; }
}

function year(){
if (t==1){ res=inp*31540000; document.getElementById("ansti").innerHTML=inp+" year is equal to "+res+" s."; }
else if (t==2){ res=inp*525600; document.getElementById("ansti").innerHTML=inp+" year is equal to "+res+" m."; }
else if (t==3){ res=inp*8760; document.getElementById("ansti").innerHTML=inp+" year is equal to "+res+" h."; }
else if (t==4){ res=inp*365; document.getElementById("ansti").innerHTML=inp+" year is equal to "+res+" d."; }
else if (t==5){ res=inp*52.1429; document.getElementById("ansti").innerHTML=inp+" year is equal to "+res+" week."; }
else if (t==6){ res=inp*12; document.getElementById("ansti").innerHTML=inp+" year is equal to "+res+" month."; }
}

function resultTi()
{
    chooseti();
    if (inp==0){ document.getElementById("ansti").innerHTML="Plese enter the amount you want to convert!!"; } 
    else if (inp<0){ document.getElementById("ansti").innerHTML="Plese enter the positive number!!"; }
    else if(f==t){ document.getElementById("ansti").innerHTML="You can't convert to the same unit!!"; }
    else if(f==1){ second(); }
    else if(f==2){ minute(); }
    else if(f==3){ hour(); }
    else if(f==4){ day(); }
    else if(f==5){ week(); }
    else if(f==6){ month(); }
    else if(f==7){ year(); }
    
    inp=0;
    res=0;
}





function choosete(){
var a=document.getElementById("fromte");
f= a.options[a.selectedIndex].value; 

var b=document.getElementById("tote");
t= b.options[b.selectedIndex].value; 

inp=document.getElementById("inputte").value;
}

function celsius(){
if (t==2){ res=(inp*9/5)+32; document.getElementById("anste").innerHTML=inp+" \xB0C is equal to "+res+" \xB0F."; }
else if (t==3){ res=(inp*1)+273; document.getElementById("anste").innerHTML=inp+" \xB0C is equal to "+res+" K."; }
}

function fahrenheit(){
if (t==1){ res=(inp*1-32)*5/9; document.getElementById("anste").innerHTML=inp+" \xB0F is equal to "+res+" \xB0C."; }
else if (t==3){ res=((inp*1-32)*5/9)+273; document.getElementById("anste").innerHTML=inp+" \xB0F is equal to "+res+" K."; }
}

function kelvin(){
if (t==1){ res=inp*1-273; document.getElementById("anste").innerHTML=inp+" K is equal to "+res+" \xB0C."; }
else if (t==2){ res=((inp*1-273)*9/5)+32; document.getElementById("anste").innerHTML=inp+" K is equal to "+res+" \xB0F"; }
}

function resultTe()
{
    choosete();
    if(f==t){ document.getElementById("anste").innerHTML="You can't convert to the same unit!!"; }
    else if(f==1){ celsius(); }
    else if(f==2){ fahrenheit(); }
    else if(f==3){ kelvin(); }
    
    inp=0;
    res=0;
}






function choosear(){
var a=document.getElementById("fromar");
f= a.options[a.selectedIndex].value; 

var b=document.getElementById("toar");
t= b.options[b.selectedIndex].value; 

inp=document.getElementById("inputar").value;
}

function sqrm(){
if (t==2){ res=inp/1000000; document.getElementById("ansar").innerHTML=inp+" sqr m is equal to "+res+" sqr km."; }
else if (t==3){ res=inp/2590000; document.getElementById("ansar").innerHTML=inp+" sqr m is equal to "+res+" sqr mi."; }
else if (t==4){ res=inp*1.19599; document.getElementById("ansar").innerHTML=inp+" sqr m is equal to "+res+" sqr yd."; }
else if (t==5){ res=inp*10.7639; document.getElementById("ansar").innerHTML=inp+" sqr m is equal to "+res+" sqr ft."; }
else if (t==6){ res=inp*1550; document.getElementById("ansar").innerHTML=inp+" sqr m is equal to "+res+" sqr in."; }
else if (t==7){ res=inp/10000; document.getElementById("ansar").innerHTML=inp+" sqr m is equal to "+res+" ha."; }
else if (t==8){ res=inp/4046.86; document.getElementById("ansar").innerHTML=inp+" sqr m is equal to "+res+" ac."; }
}

function sqrkm(){
if (t==1){ res=inp*1000000; document.getElementById("ansar").innerHTML=inp+" sqr km is equal to "+res+" sqr m."; }
else if (t==3){ res=inp*0.386102; document.getElementById("ansar").innerHTML=inp+" sqr km is equal to "+res+" sqr mi."; }
else if (t==4){ res=inp*1196000; document.getElementById("ansar").innerHTML=inp+" sqr km is equal to "+res+" sqr yd."; }
else if (t==5){ res=inp*10760000; document.getElementById("ansar").innerHTML=inp+" sqr km is equal to "+res+" sqr ft."; }
else if (t==6){ res=inp*1550000000; document.getElementById("ansar").innerHTML=inp+" sqr km is equal to "+res+" sqr in."; }
else if (t==7){ res=inp*100; document.getElementById("ansar").innerHTML=inp+" sqr km is equal to "+res+" ha."; }
else if (t==8){ res=inp*247.105; document.getElementById("ansar").innerHTML=inp+" sqr km is equal to "+res+" ac."; }
}

function sqrmi(){
if (t==1){ res=inp*2590000; document.getElementById("ansar").innerHTML=inp+" sqr mi is equal to "+res+" sqr m."; }
else if (t==2){ res=inp*2.58999; document.getElementById("ansar").innerHTML=inp+" sqr mi is equal to "+res+" sqr km."; }
else if (t==4){ res=inp*3098000; document.getElementById("ansar").innerHTML=inp+" sqr mi is equal to "+res+" sqr yd."; }
else if (t==5){ res=inp*27880000; document.getElementById("ansar").innerHTML=inp+" sqr mi is equal to "+res+" sqr ft."; }
else if (t==6){ res=inp*4014000000; document.getElementById("ansar").innerHTML=inp+" sqr mi is equal to "+res+" sqr in."; }
else if (t==7){ res=inp*258.999; document.getElementById("ansar").innerHTML=inp+" sqr mi is equal to "+res+" ha."; }
else if (t==8){ res=inp*640; document.getElementById("ansar").innerHTML=inp+" sqr mi is equal to "+res+" ac."; }
}

function sqryd(){
if (t==1){ res=inp*0.836127; document.getElementById("ansar").innerHTML=inp+" sqr yd is equal to "+res+" sqr m."; }
else if (t==2){ res=inp/1196000; document.getElementById("ansar").innerHTML=inp+" sqr yd is equal to "+res+" sqr km."; }
else if (t==3){ res=inp/3098000; document.getElementById("ansar").innerHTML=inp+" sqr yd is equal to "+res+" sqr mi."; }
else if (t==5){ res=inp*9; document.getElementById("ansar").innerHTML=inp+" sqr yd is equal to "+res+" sqr ft."; }
else if (t==6){ res=inp*1296; document.getElementById("ansar").innerHTML=inp+" sqr yd is equal to "+res+" sqr in."; }
else if (t==7){ res=inp/11959.9; document.getElementById("ansar").innerHTML=inp+" sqr yd is equal to "+res+" ha."; }
else if (t==8){ res=inp/4839.9998; document.getElementById("ansar").innerHTML=inp+" sqr yd is equal to "+res+" ac."; }
}

function sqrft(){
if (t==1){ res=inp*0.092903; document.getElementById("ansar").innerHTML=inp+" sqr ft is equal to "+res+" sqr m."; }
else if (t==2){ res=inp/10760000; document.getElementById("ansar").innerHTML=inp+" sqr ft is equal to "+res+" sqr km."; }
else if (t==3){ res=inp/27880000; document.getElementById("ansar").innerHTML=inp+" sqr ft is equal to "+res+" sqr mi."; }
else if (t==4){ res=inp/9; document.getElementById("ansar").innerHTML=inp+" sqr ft is equal to "+res+" sqr yd."; }
else if (t==6){ res=inp*144; document.getElementById("ansar").innerHTML=inp+" sqr ft is equal to "+res+" sqr in."; }
else if (t==7){ res=inp/107639; document.getElementById("ansar").innerHTML=inp+" sqr ft is equal to "+res+" ha."; }
else if (t==8){ res=inp/43560; document.getElementById("ansar").innerHTML=inp+" sqr ft is equal to "+res+" ac."; }
}

function sqrin(){
if (t==1){ res=inp/1550; document.getElementById("ansar").innerHTML=inp+" sqr in is equal to "+res+" sqr m."; }
else if (t==2){ res=inp/1550000000; document.getElementById("ansar").innerHTML=inp+" sqr in is equal to "+res+" sqr km."; }
else if (t==3){ res=inp/4014000000; document.getElementById("ansar").innerHTML=inp+" sqr in is equal to "+res+" sqr mi."; }
else if (t==4){ res=inp/1296; document.getElementById("ansar").innerHTML=inp+" sqr in is equal to "+res+" sqr yd."; }
else if (t==5){ res=inp/144; document.getElementById("ansar").innerHTML=inp+" sqr in is equal to "+res+" sqr ft."; }
else if (t==7){ res=inp/1550000; document.getElementById("ansar").innerHTML=inp+" sqr in is equal to "+res+" ha."; }
else if (t==8){ res=inp/6273000; document.getElementById("ansar").innerHTML=inp+" sqr in is equal to "+res+" ac."; }
}

function hectare(){
if (t==1){ res=inp*10000; document.getElementById("ansar").innerHTML=inp+" ha is equal to "+res+" sqr m."; }
else if (t==2){ res=inp/100; document.getElementById("ansar").innerHTML=inp+" ha is equal to "+res+" sqr km."; }
else if (t==3){ res=inp/258.999; document.getElementById("ansar").innerHTML=inp+" ha is equal to "+res+" sqr mi."; }
else if (t==4){ res=inp*11959.9; document.getElementById("ansar").innerHTML=inp+" ha is equal to "+res+" sqr yd."; }
else if (t==5){ res=inp*107639; document.getElementById("ansar").innerHTML=inp+" ha is equal to "+res+" sqr ft."; }
else if (t==6){ res=inp*1550000; document.getElementById("ansar").innerHTML=inp+" ha is equal to "+res+" sqr in."; }
else if (t==8){ res=inp*2.47105; document.getElementById("ansar").innerHTML=inp+" ha is equal to "+res+" ac."; }
}

function acre(){
if (t==1){ res=inp*4046.86; document.getElementById("ansar").innerHTML=inp+" ac is equal to "+res+" sqr m."; }
else if (t==2){ res=inp/247.105; document.getElementById("ansar").innerHTML=inp+" ac is equal to "+res+" sqr km."; }
else if (t==3){ res=inp/640; document.getElementById("ansar").innerHTML=inp+" ac is equal to "+res+" sqr mi."; }
else if (t==4){ res=inp*4839.9998; document.getElementById("ansar").innerHTML=inp+" ac is equal to "+res+" sqr yd."; }
else if (t==5){ res=inp*43560; document.getElementById("ansar").innerHTML=inp+" ac is equal to "+res+" sqr ft."; }
else if (t==6){ res=inp*6273000; document.getElementById("ansar").innerHTML=inp+" ac is equal to "+res+" sqr in."; }
else if (t==7){ res=inp/2.47105; document.getElementById("ansar").innerHTML=inp+" ac is equal to "+res+" ha."; }
}

function resultAr()
{
    choosear();
    if (inp==0){ document.getElementById("ansar").innerHTML="Plese enter the amount you want to convert!!"; } 
    else if (inp<0){ document.getElementById("ansar").innerHTML="Plese enter the positive number!!"; }
    else if(f==t){ document.getElementById("ansar").innerHTML="You can't convert to the same unit!!"; }
    else if(f==1){ sqrm(); }
    else if(f==2){ sqrkm(); }
    else if(f==3){ sqrmi(); }
    else if(f==4){ sqryd(); }
    else if(f==5){ sqrft(); }
    else if(f==6){ sqrin(); }
    else if(f==7){ hectare(); }
    else if(f==8){ acre(); }
    inp=0;
    res=0;
}





function choosevol(){
var a=document.getElementById("fromvol");
f= a.options[a.selectedIndex].value; 

var b=document.getElementById("tovol");
t= b.options[b.selectedIndex].value; 

inp=document.getElementById("inputvol").value;
}

function cubm(){
if (t==2){ res=inp*1000; document.getElementById("ansvol").innerHTML=inp+" cub m is equal to "+res+" l."; }
else if (t==3){ res=inp*1000000; document.getElementById("ansvol").innerHTML=inp+" cub m is equal to "+res+" cub cm/ml."; }
else if (t==4){ res=inp*35.3147; document.getElementById("ansvol").innerHTML=inp+" cub m is equal to "+res+" cub ft."; }
else if (t==5){ res=inp*61023.802; document.getElementById("ansvol").innerHTML=inp+" cub m is equal to "+res+" cub in."; }
else if (t==6){ res=inp*264.172; document.getElementById("ansvol").innerHTML=inp+" cub m is equal to "+res+" us gl."; }
else if (t==7){ res=inp*219.969; document.getElementById("ansvol").innerHTML=inp+" cub m is equal to "+res+" imp gl."; }
}

function litre(){
if (t==1){ res=inp/1000; document.getElementById("ansvol").innerHTML=inp+" l is equal to "+res+" cub m."; }
else if (t==3){ res=inp*1000; document.getElementById("ansvol").innerHTML=inp+" l is equal to "+res+" cub cm/ml."; }
else if (t==4){ res=inp*0.0353147; document.getElementById("ansvol").innerHTML=inp+" l is equal to "+res+" cub ft."; }
else if (t==5){ res=inp*61.0237; document.getElementById("ansvol").innerHTML=inp+" l is equal to "+res+" cub in."; }
else if (t==6){ res=inp*0.264172; document.getElementById("ansvol").innerHTML=inp+" l is equal to "+res+" us gl."; }
else if (t==7){ res=inp*0.219969; document.getElementById("ansvol").innerHTML=inp+" l is equal to "+res+" imp gl."; }
}

function millilitre(){
if (t==1){ res=inp/1000000; document.getElementById("ansvol").innerHTML=inp+" cub cm/ml is equal to "+res+" cub m."; }
else if (t==2){ res=inp/1000; document.getElementById("ansvol").innerHTML=inp+" cub cm/ml is equal to "+res+" l."; }
else if (t==4){ res=inp/28316.8; document.getElementById("ansvol").innerHTML=inp+" cub cm/ml is equal to "+res+" cub ft."; }
else if (t==5){ res=inp/16.3871; document.getElementById("ansvol").innerHTML=inp+" cub cm/ml is equal to "+res+" cub in."; }
else if (t==6){ res=inp/3785.41; document.getElementById("ansvol").innerHTML=inp+" cub cm/ml is equal to "+res+" us gl."; }
else if (t==7){ res=inp/4546.09; document.getElementById("ansvol").innerHTML=inp+" cub cm/ml is equal to "+res+" imp gl."; }
}

function cubft(){
if (t==1){ res=inp*0.0283168; document.getElementById("ansvol").innerHTML=inp+" cub ft is equal to "+res+" cub m."; }
else if (t==2){ res=inp*28.3168; document.getElementById("ansvol").innerHTML=inp+" cub ft is equal to "+res+" l."; }
else if (t==3){ res=inp*28316.8; document.getElementById("ansvol").innerHTML=inp+" cub ft is equal to "+res+" cub cm/ml."; }
else if (t==5){ res=inp*1728; document.getElementById("ansvol").innerHTML=inp+" cub ft is equal to "+res+" cub in."; }
else if (t==6){ res=inp*7.48052; document.getElementById("ansvol").innerHTML=inp+" cub ft is equal to "+res+" us gl."; }
else if (t==7){ res=inp*6.22884; document.getElementById("ansvol").innerHTML=inp+" cub ft is equal to "+res+" imp gl."; }
}

function cubin(){
if (t==1){ res=inp/61023.7; document.getElementById("ansvol").innerHTML=inp+" cub in is equal to "+res+" cub m."; }
else if (t==2){ res=inp/61.0237; document.getElementById("ansvol").innerHTML=inp+" cub in is equal to "+res+" l."; }
else if (t==3){ res=inp/0.0610237; document.getElementById("ansvol").innerHTML=inp+" cub in is equal to "+res+" cub cm/ml."; }
else if (t==4){ res=inp/1728; document.getElementById("ansvol").innerHTML=inp+" cub in is equal to "+res+" cub ft."; }
else if (t==6){ res=inp/231; document.getElementById("ansvol").innerHTML=inp+" cub in is equal to "+res+" us gl."; }
else if (t==7){ res=inp/277.419; document.getElementById("ansvol").innerHTML=inp+" cub in is equal to "+res+" imp gl."; }
}

function usgal(){
if (t==1){ res=inp*0.0037854; document.getElementById("ansvol").innerHTML=inp+" us gl is equal to "+res+" cub m."; }
else if (t==2){ res=inp*3.78541; document.getElementById("ansvol").innerHTML=inp+" us gl is equal to "+res+" l."; }
else if (t==3){ res=inp*3785.41; document.getElementById("ansvol").innerHTML=inp+" us gl is equal to "+res+" cub cm/ml."; }
else if (t==4){ res=inp*0.133681; document.getElementById("ansvol").innerHTML=inp+" us gl is equal to "+res+" cub ft."; }
else if (t==5){ res=inp*231; document.getElementById("ansvol").innerHTML=inp+" us gl is equal to "+res+" cub in."; }
else if (t==7){ res=inp*0.832674; document.getElementById("ansvol").innerHTML=inp+" us gl is equal to "+res+" imp gl."; }
}

function impgal(){
if (t==1){ res=inp/219.969; document.getElementById("ansvol").innerHTML=inp+" imp gl is equal to "+res+" cub m."; }
else if (t==2){ res=inp/0.219969; document.getElementById("ansvol").innerHTML=inp+" imp gl is equal to "+res+" l."; }
else if (t==3){ res=inp*4546.09; document.getElementById("ansvol").innerHTML=inp+" imp gl is equal to "+res+" cub cm/ml."; }
else if (t==4){ res=inp/6.22884; document.getElementById("ansvol").innerHTML=inp+" imp gl is equal to "+res+" cub ft."; }
else if (t==5){ res=inp*277.419; document.getElementById("ansvol").innerHTML=inp+" imp gl is equal to "+res+" cub in."; }
else if (t==6){ res=inp/0.832674; document.getElementById("ansvol").innerHTML=inp+" imp gl is equal to "+res+" us gl."; }
}

function resultVol()
{
    choosevol();
    if (inp==0){ document.getElementById("ansvol").innerHTML="Plese enter the amount you want to convert!!"; } 
    else if (inp<0){ document.getElementById("ansvol").innerHTML="Plese enter the positive number!!"; }
    else if(f==t){ document.getElementById("ansvol").innerHTML="You can't convert to the same unit!!"; }
    else if(f==1){ cubm(); }
    else if(f==2){ litre(); }
    else if(f==3){ millilitre(); }
    else if(f==4){ cubft(); }
    else if(f==5){ cubin(); }
    else if(f==6){ usgal(); }
    else if(f==7){ impgal(); }
    inp=0;
    res=0;
}





function choosespd(){
var a=document.getElementById("fromspd");
f= a.options[a.selectedIndex].value; 

var b=document.getElementById("tospd");
t= b.options[b.selectedIndex].value; 

inp=document.getElementById("inputspd").value;
}

function mps(){
if (t==2){ res=inp*3.28084; document.getElementById("ansspd").innerHTML=inp+" mps is equal to "+res+" fps."; }
else if (t==3){ res=inp*3.6; document.getElementById("ansspd").innerHTML=inp+" mps is equal to "+res+" kmph."; }
else if (t==4){ res=inp*2.23694; document.getElementById("ansspd").innerHTML=inp+" mps is equal to "+res+" mph."; }
else if (t==5){ res=inp*1.94384; document.getElementById("ansspd").innerHTML=inp+" mps is equal to "+res+" kt."; }
}

function fps(){
if (t==1){ res=inp*0.3048; document.getElementById("ansspd").innerHTML=inp+" fps is equal to "+res+" mps."; }
else if (t==3){ res=inp*1.09728; document.getElementById("ansspd").innerHTML=inp+" fps is equal to "+res+" kmph."; }
else if (t==4){ res=inp*0.681818; document.getElementById("ansspd").innerHTML=inp+" fps is equal to "+res+" mph."; }
else if (t==5){ res=inp*0.592484; document.getElementById("ansspd").innerHTML=inp+" fps is equal to "+res+" kt."; }
}

function kmph(){
if (t==1){ res=inp*0.277778; document.getElementById("ansspd").innerHTML=inp+" kmph is equal to "+res+" mps."; }
else if (t==2){ res=inp*0.911344; document.getElementById("ansspd").innerHTML=inp+" kmph is equal to "+res+" fps."; }
else if (t==4){ res=inp*0.621371; document.getElementById("ansspd").innerHTML=inp+" kmph is equal to "+res+" mph."; }
else if (t==5){ res=inp*0.539957; document.getElementById("ansspd").innerHTML=inp+" kmph is equal to "+res+" kt."; }
}

function mph(){
if (t==1){ res=inp*0.44704; document.getElementById("ansspd").innerHTML=inp+" mph is equal to "+res+" mps."; }
else if (t==2){ res=inp*1.46667; document.getElementById("ansspd").innerHTML=inp+" mph is equal to "+res+" fps."; }
else if (t==3){ res=inp*1.60934; document.getElementById("ansspd").innerHTML=inp+" mph is equal to "+res+" kmph."; }
else if (t==5){ res=inp*0.868976; document.getElementById("ansspd").innerHTML=inp+" mph is equal to "+res+" kt."; }
}

function knot(){
if (t==1){ res=inp*0.5144; document.getElementById("ansspd").innerHTML=inp+" kt is equal to "+res+" mps."; }
else if (t==2){ res=inp*1.68781; document.getElementById("ansspd").innerHTML=inp+" kt is equal to "+res+" fps."; }
else if (t==3){ res=inp*1.852; document.getElementById("ansspd").innerHTML=inp+" kt is equal to "+res+" kmph."; }
else if (t==4){ res=inp*1.15078; document.getElementById("ansspd").innerHTML=inp+" kt is equal to "+res+" mps."; }
}

function resultSpd()
{
    choosespd();
    if (inp==0){ document.getElementById("ansspd").innerHTML="Plese enter the amount you want to convert!!"; } 
    else if(f==t){ document.getElementById("ansspd").innerHTML="You can't convert to the same unit!!"; }
    else if(f==1){ mps(); }
    else if(f==2){ fps(); }
    else if(f==3){ kmph(); }
    else if(f==4){ mph(); }
    else if(f==5){ knot(); }
    inp=0;
    res=0;
}