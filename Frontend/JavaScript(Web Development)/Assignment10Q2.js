let button=document.createElement("button");
let body=document.querySelector("body");
body.append(button);

button.innerText="Submit";
button.addEventListener("click",function(){
    this.style.backgroundColor="Orange";
})