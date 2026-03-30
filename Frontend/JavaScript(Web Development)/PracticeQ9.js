let abc=document.createElement("p");

abc.innerText="Hey I'm Red";

abc.style.color="red";
let div1=document.querySelector("div");
div1.prepend(abc);
// div1.remove();


let ab=document.createElement('h3');
ab.innerText="I'm Blue Text";
ab.style.color="Blue";
div1.append(ab);

let div2=document.createElement("div");
div2.style.border="black";
div2.style.backgroundColor="Pink";

div1.append(div2);

let abcd=document.createElement("h1");
abcd.innerText="Hey I'm In Div"
div2.append(abcd);


let abcde=document.createElement("p");
abcde.innerText="Also I'm in Div"
div2.append(abcde);