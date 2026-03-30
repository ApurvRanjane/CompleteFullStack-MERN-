let input=document.querySelector("input");

input.addEventListener("keydown",function(event){
    console.log("Button was down");
    console.dir(event);
    if(event.key=='A'){
        console.log("A was present")
    }
    else if(event.key=='B'){
        console.log("B was present")
    }
})