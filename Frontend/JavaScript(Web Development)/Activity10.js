let btn=document.querySelector("button");


btn.addEventListener("click",function(){
    console.log("Button Clicked!!");

    let h3=document.querySelector("h3");
    let random=getrandomcolor();
    h3.innerText=random;
    console.log("Color is updated!!")

    let div=document.querySelector("div");
    div.style.backgroundColor=random;
});

let getrandomcolor=function(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}