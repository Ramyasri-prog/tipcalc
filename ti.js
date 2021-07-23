const a=document.getElementById('btn');
a.style.backgroundColor="yellow";
b=document.getElementById('bill');
c=document.getElementById('tip');
d=document.getElementById('ta');
e=document.getElementById('tot');
a.addEventListener("click",calc);
function calc() {
    let ab = b.value;
    let cd = c.value;
    let ba = parseInt(ab);
    let pt = parseInt(cd);
    let ct = (pt/100)*ba;
    let cto = ba+ct;
    d.value=ct;
    e.value=cto;
}