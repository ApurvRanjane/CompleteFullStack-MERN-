// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user=document.querySelector("#use");
//     let password=document.querySelector("#pass");
//     console.log(user.value);
//     console.log(password.value);
//     alert(`Welcome ${user.value} ,Your Password is${password.value}`)
// })


let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form)
    let user=this.elements[0];
    let password=this.elements[1];
    console.log(user.value);
    console.log(password.value);
    alert(`Welcome ${user.value} ,Your Password is${password.value}`)
})