// getting-started.js
const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Success!!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userschema=new mongoose.Schema(
    {name:String,
    email:String,
    age:Number
    }
);

const User=mongoose.model("User",userschema);

// const user1=new User({name:"Apurv",email:"apurvr215gmail.com",age:20});
// user1.save();

// const user2=new User({name:"Avdhut",email:"apu215gmail.com",age:24});
// user2
// .save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// User.find().then((data)=>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err);
// })

// User.findOne({age:{$gte:23}}).then((data)=>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err);
// })

// User.findById("6889d5c9769195a525f69c48").then((data)=>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err);
// })

// User.findOneAndUpdate({age:{$gte:78}},{age:87},{new:true})
// .then((res)=>{
//   console.log(res);
// })

// User.findByIdAndUpdate('6889d5c9769195a525f69c48',{age:87},{new:true})
// .then((res)=>{
//   console.log(res);
// })

// User.deleteOne({name:"Apurv"}).then((res)=>{
//   console.log(res);
// })

User.findOneAndDelete({name:"Avdhut"}).then((res)=>{
  console.log(res);
})