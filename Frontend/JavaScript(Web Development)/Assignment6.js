

// // function large(a,b)
// // {
// //     for(let i=0;i<a.length;i++){
// //         if(b<a[i]){
// //             console.log(arr[i]);
// //         }
// //     }
// // }

// // let num=prompt("Enter the number:");
// // let arr=[1,2,3,4,5,6,7,8,9,10];
// // let s=large(arr,num);

// let str="abcdefabcdefgh";
// function unique(str){
//     let ans=" ";
//     for(let i=0;i<str.length;i++){
//         let currchar=str[i];
//         if(ans.indexOf(currchar)==-1)
//         {
//             ans+=currchar;
//         }
//     }
//     return ans;
// }

// let s=unique(str);
// console.log(s);

str="apurv";
let count=0;
function vowels(str){
    for(let i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            count+=1;
        }
    }
    return count;
}

let s=vowels(str);
console.log(s);