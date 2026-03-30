let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
});

let user=document.querySelector("#use");
user.addEventListener("change",function(){
    console.log("Value Changed!!!");
    console.log(`Change value is${this.value}`);
})

let password=document.querySelector("#pass");
password.addEventListener("input",function(){
    console.log("Value Changed!!!");
    console.log(`Change value is ${this.value}`);
})