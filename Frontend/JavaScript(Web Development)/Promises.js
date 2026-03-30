// function SavetoDB(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     console.log(data);
//     if(internetspeed>4){
//         success();
//     }
//     else{
//         failure();
//     }

// }

// SavetoDB("Apurv Ranjane",()=>{
//     console.log("Success:Data saved !");
//     SavetoDB("Computer Engineer",()=>{
//          console.log("Success1:Data1 saved !");
//          SavetoDB("Full Stack Developer",()=>{
//             console.log("Success2:Data2 saved !");
//          },()=>{
//             console.log("Failure2:Data2 not saved !");
//          })
//     },()=>{
//          console.log("Failure1:Data1  not saved !");
//     })
// },()=>{
//     console.log("Failure:Data not saved!!");
// })

function SavetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            resolve("Success:Data Saved Successfully");
        }
        else{
            reject("Failure:weak connection");
        }
    });
}

SavetoDB("Apu")
.then((result)=>{
    console.log("Data1 Saved!");
    console.log(result);
    return SavetoDB("apurv");
})

.then((result)=>{
     console.log("Data2 Saved!");
      console.log(result);
    return SavetoDB("apuv");
})

.then((result)=>{
     console.log("Data3 Saved!");
      console.log(result);
    return SavetoDB("apu");
})

.then((result)=>{
     console.log("Data4 Saved!");
      console.log(result);
    return SavetoDB("puv");
})

.then((result)=>{
     console.log("Data5 Saved!");
      console.log(result);
    
})

.catch((error)=>{
    console.log("Promise was rejected!!!!!");
     console.log(error);
})