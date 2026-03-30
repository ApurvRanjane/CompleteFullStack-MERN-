let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color=color;
        resolve("Color Was changes!!");
    },delay)
    })
    
}

// changecolor("red",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("maroon",1000,()=>{
//             changecolor("pink",1000,()=>{
//                 changecolor("yellow",1000)
//             })
//         })
//     })
// });

changecolor("red",1000)
.then((result)=>{
    console.log(result);
    console.log("Red Color");
    return changecolor("yellow",1000);
})

.then((result)=>{
    console.log(result);
    console.log("Yellow Color");
    return changecolor("orange",1000);
})

.then((result)=>{
    console.log(result);
    console.log("Orange Color");
    return changecolor("maroon",1000);
})

.then((result)=>{
    console.log(result);
    console.log("Marron Color");
    return changecolor("pink",1000);
})

.then((result)=>{
    console.log(result);
    console.log("Pink Color");
    
})

