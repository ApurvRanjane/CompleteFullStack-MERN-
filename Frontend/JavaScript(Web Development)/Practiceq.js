const square=(n)=>{
    return n*n;
}

let id=setInterval(()=>{
    console.log("Hello World!");
},2000)

setTimeout(()=>{
    clearInterval(id);
    console.log("Stop !!!!!!");
},10000)