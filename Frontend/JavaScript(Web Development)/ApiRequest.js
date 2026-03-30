let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//      return res.json();
// })

// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })

// .then((res1)=>{
//     console.log(res1);
//      return res1.json();
// })

// .then((data1)=>{
//     console.log(data1.fact);
    
// })

// .catch((err)=>{
//     console.log("Error is",err);
// })

async function getvalue() {
    try{
    let res=await  fetch(url);
    let data=await res.json();
    console.log(data.fact);

    let res1=await  fetch(url);
    let data1=await res1.json();
    console.log(data1.fact);
    }
    catch(e){
        console.log("Error is-",e);
    }
    console.log("Bye!");
}

getvalue();