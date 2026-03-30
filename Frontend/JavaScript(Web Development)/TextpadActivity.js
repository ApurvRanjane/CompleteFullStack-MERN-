let inpu=document.querySelector("input");
inpu.addEventListener("input",function(){
    console.log(this.value);
    let para=document.querySelector("p");
    para.innerText=this.value;
})

