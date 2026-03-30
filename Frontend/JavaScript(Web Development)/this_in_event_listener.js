let btn=document.querySelector("button");
let para=document.querySelector("p");
let div=document.querySelector("div");

let print=function(){
    console.dir(this.innerText);
    this.style.backgroundColor="pink"
}
btn.addEventListener("click",print);
para.addEventListener("click",print);
div.addEventListener("click",print);
