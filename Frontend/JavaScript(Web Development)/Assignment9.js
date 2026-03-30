let abc=document.createElement("Input");
let abcd=document.createElement("button");
abcd.innerText="Submit!";
let ab=document.querySelector("body");
ab.append(abc);
ab.append(abcd);


abc.setAttribute("placeholder","User");
abcd.setAttribute("id","button");


let select=document.querySelector("#button");
console.dir(select);
select.style.backgroundColor="Blue";
select.style.color="RED";


let h1=document.createElement("h1");
h1.innerHTML="<u>Apurv Ranjane</u>"
ab.append(h1);

let para=document.createElement("p");
para.innerHTML="Pursuoing Third year of <b>Computer Engineering</b>";
ab.append(para);
