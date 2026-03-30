let arr=[1,2,3,4,];



// let arr1=arr.map((el)=>{
//     return (el*2);
// });

// let arr2=arr.filter((el)=>{
//     return el%2==0;
// });

// let b=arr.every((el)=>(el%2==0));
// let c=arr.some((el)=>el%2==0);


let value=arr.reduce((res,el)=>{
    console.log(res);
    return res+el});
 console.log(value);

//  let max=arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
//  })
//  console.log(max);