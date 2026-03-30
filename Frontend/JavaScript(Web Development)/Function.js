// function average(a,b,c){
//     let avg=(a+b+c)/3;
//     console.log(avg);
// }

// average(88,90,92);

// function Table(n)
// {
//     for(let i=1;i<=10;i++)
//     {
//         let table=n*i;
//         console.log(table);

//     }
// }

// Table(24);

// function Table1(n){

//     for(let i=n;i<=n*10;i=i+n)
//     {
        
//         console.log(i);

//     }
// }

// Table1(24);
// function sum(1,n){
//     let add=0;
// let a=sum(45,56);
// console.log(a);

// function adult(a){
//     if(a>18){
//         return "adult";
//     }
//     else{
//         return "Not adult";
//     }
// }

// let b=adult(19);
// console.log(b);

// function addition(a,n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// let n=prompt("Enter the number:");
// let a=addition(1,n);
// console.log(a);

function concat(arr)
{
    let C="";
    for(let i=0;i<arr.length;i++)
    {
        C=C+arr[i];
    }
    return C;
}
let arr=["Apurv","Rajaram","Ranjane"];
let d=concat(arr);
console.log(d);