let gameseq=[];
let userseq=[];

let level=0;
let start=false;

let btns=["red","yellow","green","purple"]

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game is started!");
        start=true;
       levelup();
    }
})

let h2=document.querySelector("h2");

 function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    userseq=[];
    let randindx=Math.floor(Math.random()*3);
    let randcolor=btns[randindx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randindx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    Gameflash(randbtn);
 }

 function Gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)

 }

  function Userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200)

 }

 function btnpress(){
    // console.log(this);
    let btn=this;
    Userflash(btn);
    let usercolor=this.getAttribute("id");
   userseq.push(usercolor);
//    console.log(userseq);
    checkans(userseq.length-1);
}


 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnpress);
 }


 function checkans(idx){
    // console.log("Current Level",level);
   
    if(gameseq[idx]==userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over,Your Score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white"; 
        },150);
        reset();
    }
 }

 function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
 }