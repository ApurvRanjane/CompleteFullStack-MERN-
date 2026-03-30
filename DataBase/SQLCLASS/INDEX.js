const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app = express();
const path=require("path");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

let port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'SQLBACK1',
  password: 'Satara@12321'
});

let  createRandomUser=()=>{
  return [
     faker.string.uuid(),
     faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
     faker.internet.password()
];
}

// let data=[];
// for(let i=1;i<100;i++){
//   data.push(createRandomUser());
// }

// console.log(data);




app.listen(port,()=>{
  console.log("app is listening on port 8080");
})

app.get("/",(req,res)=>{
  let q="SELECT count(*) FROM user";
  try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    let count=result[0]["count(*)"];
    res.render("home.ejs",{count});
  });
  }catch(err){
    console.log(err);
    res.send(err);
  }


  
})

app.get("/user",(req,res)=>{
  let q="SELECT * FROM user";
  try{
  connection.query(q,(err,users)=>{
    if(err) throw err;
    // console.log(result);
    res.render("user.ejs",{users});
  });
  }catch(err){
    console.log(err);
    res.send(err);
  }


  
})

//EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    // console.log(result);
    let user=result[0];
    res.render("edit.ejs",{user});
  });
  }catch(err){
    console.log(err);
    res.send(err);
  }
})

//UPDATE ROUTE IN DB
app.patch("/user/:id",(req,res)=>{
 let {id}=req.params;
 let{password:formpass,username:newUsername}=req.body;
 let q=`SELECT * FROM user WHERE id='${id}'`;
 try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    // console.log(result);
    let user=result[0];
//     console.log("Form Password:", formpass);
// console.log("DB Password:", user.password);

    if(formpass==user.password){
      let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
      connection.query(q2,(err,result)=>{
        if(err) throw err;
        res.redirect("/user");
      })
      
    }
    else{
      res.send("Wrong password!!!!");
    }
  });
  }catch(err){
    console.log(err);
    res.send(err);
  }
})

app.get("/user/new",(req,res)=>{
  res.render("new_data.ejs");
})

app.post("/user", (req, res) => {
  let { username, email, password, id } = req.body;

  let q3 = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  let values = [id, username, email, password];

  try {
    connection.query(q3, values, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
