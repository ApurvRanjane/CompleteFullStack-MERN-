const mongoose = require('mongoose');
const Chat=require("./models/chat.js")
main()
.then(()=>{
    console.log("Connectin Successfull!!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats=[{
     from:"Kaustubh",
    to:"Avdhut",
    msg:"Hello Send me your resume",
    created_at:new Date()
},
{
     from:"Apurv",
    to:"Yogiraj",
    msg:"Hello How are you",
    created_at:new Date()
},
{
     from:"Raj",
    to:"Yash",
    msg:"What is you name?",
    created_at:new Date()
},
{
     from:"Manish",
    to:"Avdhut",
    msg:"How was your weekend?",
    created_at:new Date()
},
{
     from:"Sanket",
    to:"Harshad",
    msg:"Where are you?",
    created_at:new Date()
},
{
     from:"Prem",
    to:"Vinay",
    msg:"Let's GO TO COLLEGE!",
    created_at:new Date()
},
{
     from:"Parshaw",
    to:"Prajwal",
    msg:"Hello Send me your notes!",
    created_at:new Date()
},
{
     from:"Virendra",
    to:"Pratik",
    msg:"Hello Send me your assignments!",
    created_at:new Date()
}
]

Chat.insertMany(allchats);