let ulist=document.querySelector("ul");
let inpu=document.querySelector("input");
let button=document.querySelector("button");

button.addEventListener("click",function(){
    let list=document.createElement("li");
    list.innerText=inpu.value;
    ulist.appendChild(list);
    inpu.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete!";
    delbtn.classList.add("Del");
    list.appendChild(delbtn);
})

// let delbtns=document.querySelectorAll(".Del");
// for(btns of delbtns){
//     btns.addEventListener("click",function(){
//         let abc=btns.parentElement;
//         abc.remove();
        
//     })
// }

ulist.addEventListener("click",function(event){
    console.dir(event.target);
    if(event.target.nodeName=="BUTTON"){
        let abc=event.target.parentElement;
        abc.remove();
    }
})