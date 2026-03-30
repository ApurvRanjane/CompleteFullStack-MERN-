let url="https://catfact.ninja/fact";

async function getfact() {
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        return e;
    }
}

let button=document.querySelector("button");
button.addEventListener("click",async ()=>{
    let fact=await getfact();
    let pa=document.querySelector("#result");
    pa.innerText=fact;

})