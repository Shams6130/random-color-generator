let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomcolor=getRandomColor();
    h3.innerText=randomcolor;
    h3.style.color=randomcolor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;

});
function getRandomColor(){
    let red=Math.floor(Math.random()*225);
    let green=Math.floor(Math.random()*225);
    let blue=Math.floor(Math.random()*225);

    let color=`rgb(${red},${green},${blue})`;
    return color;


}