let inpu=document.querySelector("input");
inpu.addEventListener("input",function(){
   const filtered = this.value.replace(/[^a-zA-Z ]/g, "");
   console.log(filtered);
    let h2=document.querySelector("h2");
    h2.innerText=filtered;
})