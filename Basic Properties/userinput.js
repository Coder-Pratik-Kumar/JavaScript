let x=prompt("enter the first number: ").trim();
let y=prompt("enter the second number: ").trim();

let xint=parseInt(x);
let yint=parseInt(y);
function add(xint,yint){
    return xint+yint;
}
let a=add(xint,yint);
document.getElementById("demo").innerHTML=a;