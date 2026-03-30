// // // // // for(let i=1;i<=15;i=i+2){
// // // // //     console.log(i);
// // // // // }

// // // // // for(let i=2;i<=15;i=i+2){
// // // // //     console.log(i);
// // // // // }

// // // // // for(let i=5;i<=50;i=i+5){
// // // // //     console.log(i);
// // // // // }

// // // // let j=prompt("Enter the number:");
// // // // let k=parseInt(j);
// // // // while(k<=20)
// // // // {
// // // //     console.log(k);
// // // //     k=k+2;
// // // // }

// // // let fav="Tarzan";
// // // let guess=prompt("Enter the movie name:");
// // // while((guess != fav) && (guess != "quite"))
// // // {
// // //     console.log("Wrong");
// // //     guess=prompt("Enter the movie name again:");
// // // }
// // // if(guess == fav){
// // //     console.log("Congrats");
// // // }
// // // else{
// // //     console.log("Quite by you");
// // // }

// // let arr=["Januayry","July","March","Augast"];
// // for(let i=arr.length-1;i>=0;i--){
// //     console.log(i,arr[i]);
// // }

// let arr=[
//     [1,2,3,4],
//     [5,6,7,8,]
// ];

// for(let i=0;i<arr.length;i++)
// {
//     console.log(i,arr[i],arr[i].length);
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(`j=${j},${arr[i][j]}`);
//     }
// }

let fruits=[["mango","guavava","banana","pineapple"],[1,2,3,45,5]];
// for(k of fruits){
//     console.log(k);
// }

// for(char of "Apurv Ranajane")
// {
//     console.log(char);
// }
for(list of fruits){
    for(j of list){
        console.log(j);
    }
}