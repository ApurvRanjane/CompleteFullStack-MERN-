//Question1
// let arr=[1,2,3,4,5];
// let square=arr.map((el)=>(el*el));
// console.log(square);

// let sum=square.reduce((res,el)=>(res+el));
// console.log(sum);

// let average=sum/arr.length;
// console.log(average);

// //Question2
// let arr5=arr.map((el)=>(el+5));
// console.log(arr5);

// //question3
// let str=["Apurv","Pratik","Kaustubh","Virendra"];
// let uper=str.map((el)=>(el.toUpperCase()));
// console.log(uper);

//question4
// const double2=(arr,...arg)=>([
//     ...arr,
//     ...arg.map((el)=>(el*2))]
// )
// let c=double2([1,2,3,4],9,7,6);
// console.log(c);

//question5
const merge=(ob1,ob2)=>({...ob1,...ob2})
let d=merge({a:1,b:2},{c:3,d:4});
console.log(d);