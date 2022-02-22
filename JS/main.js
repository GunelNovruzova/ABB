function Open(){
    var sidebar =document.getElementById("sidebar")
    sidebar.style.opacity='1';
}
function Close(){
    var sidebar =document.getElementById("sidebar")
    sidebar.style.opacity='0';
}
function Click(){
    var div =document.getElementById("flag1");
    div.classList.toggle('flag')
    div.style.opacity='1';
    var icn=document.getElementById('icn');
    icn.style.transform='rotate(180deg)'
}
function Close1(){
    var div=document.getElementById('flag1');
    div.style.opacity='1';
}
function Openb(){
    console.log('abc');
    var side=document.getElementById('sidebar-phone')
    side.style.visibility='visible';
    side.style.cursor='pointer'
}
function Open2(){
    var search=document.getElementById('sidebar-phone2');
    search.style.opacity='1';

}
function Close2(){
    var close=document.getElementById('sidebar-phone2');
    close.style.opacity='0'
}
function Open3(){
    var uniq=document.getElementById('others')
    uniq.style.opacity='1'
    var inc1=document.getElementById('icn1')
    inc1.style.transform='rotate(180deg)'
}
function Close3(){
    var uniq=document.getElementById('others')
    uniq.style.opacity='0'
}