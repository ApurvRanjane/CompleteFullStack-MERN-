// let arr=[1,2,3,4,5,2,9,2];
// console.log("Array before deletion");
// console.log(arr);
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//       arr.splice(i,1)
//     }
// }
// console.log(arr);

// let a=prompt("Enter number:");
// let copy=a;
// let count=0;
// while(copy>0){
//     count+=1;
//     copy=Math.floor(copy/10);
// }
// console.log(`The ${a} is contain ${count} digit.`);

// let a=prompt("Enter number:");
// let copy=a;
// let sum=0;
// while(copy>0){
//     let digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(`The ${a} disits sum is ${sum}.`);

// let a=prompt("Enter number:");
// let fact=1;
// for(let i=1;i<=a;i++){
//     fact=fact*i;
// }
// console.log(`The ${a} factorial is ${fact}.`);

let arr=[];
let n=prompt("Enter number you want to add in array:")
for(let i=0;i<n;i++){
    let value=prompt("Enter the value:");
    arr.push(value);
}
let max=0;
for(let j=0;j<n;j++){
    if(arr[j]>max){
        max=arr[j];
    }
}
console.log(max);