// // // // // // console.dir(document);
// // // // // // console.dir(document.all);
// // // // // // console.dir(document.all[8].innerText);
// // // // // // document.all[8].innerText="Apurv Ranjane";

// // // // // // //SELECT  ELEMENT BY ID:
// // // // // // let obj=document.getElementById("mainImg");
// // // // // // console.log(obj);
// // // // // // console.dir(obj);
// // // // // // // obj.src="creation_1.png";
// // // // // // console.log(obj.id);

// // // // // // //SELECT  ELEMENT BY CLASS:
// // // // // // let obj1=document.getElementsByClassName("images");
// // // // // // console.log(obj1);
// // // // // // console.dir(obj1);

// // // // // //By tag name:
// // // // // let abc=document.getElementsByTagName("p")[1];
// // // // // console.dir(abc);
// // // // // abc.innerText="Avdhut Ranjane Is a ";

// // // // // let abc=document.querySelector("p");
// // // // // console.dir(abc);
// // // // // console.dir(document.querySelector("#mainImg"));
// // // // // console.dir(document.querySelector(".images"));
// // // // // console.dir(document.querySelectorAll("p"));
// // // // // console.dir(document.querySelectorAll("p")[1]);

// // // // let abc=document.querySelector("p");
// // // // console.dir(abc);
// // // // console.dir(abc.innerHTML);
// // // // console.dir(abc.innerText);
// // // // console.dir(abc.textContent);


// // // // abc.innerText="Apurv Rajaram Ranjane";
// // // // abc.innerHTML="<b><i>Apurv Ranjane</i></b>"
// // // let abc=document.querySelector("img");
// // // console.log(abc.getAttribute("id"));
// // // abc.setAttribute("src","creation_2.jpeg")

// // let abc=document.querySelector("h1");
// // abc.style.color="Orange";

// // let abcd=document.querySelectorAll(".box a");
// // for(let i=0;i<abcd.length;i++){
// //     abcd[i].style.color="RED";
// // }

// let abc=document.querySelector("div");
// console.dir(abc.classList);

// abc.classList.add(".under");
// console.dir(abc.classList);


// console.dir(abc.classList.contains(".under"));
// console.dir(abc.classList.toggle(".under"));

let abc=document.querySelector("h4");
console.log(abc.parentElement);
console.dir(abc.parentElement);
let abcd=document.querySelector("ul");
console.dir(abcd.children);
console.log(abcd.children);
console.log(abcd.childElementCount);
console.log(abcd.nextElementSibling);
console.log(abcd.previousElementSibling);
