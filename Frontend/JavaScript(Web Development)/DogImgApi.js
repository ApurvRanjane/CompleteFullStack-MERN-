let url="https://dog.ceo/api/breeds/image/random";

async function getfact() {
    try{
        let res=await axios.get(url);
        return res.data.message;
    }
    catch(e){
        return e;
    }
}

let button=document.querySelector("button");
button.addEventListener("click",async ()=>{
    let fact=await getfact();
    let img=document.querySelector("#result");
    img.setAttribute("src",fact);
})