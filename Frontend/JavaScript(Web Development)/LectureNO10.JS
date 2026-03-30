// let btn=document.querySelector("button");

// let click=function(){
//     console.log("Button was clicked!!!!!!");
// }
// btn.onclick=click;


let btn=document.querySelectorAll("button");

let click=function(){
    console.log("Button was clicked!!!!!!");
}

let print=function(){
    console.log("printed!!!!!");
}


for(btns of btn){
    btns.addEventListener("click",click);
    btns.addEventListener("click",print);
    btns.addEventListener("dblclick",print);
}