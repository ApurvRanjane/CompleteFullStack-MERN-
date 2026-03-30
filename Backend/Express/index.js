const express=require("express");
const app=express();
// console.log(app);

let port=3000;
app.listen(port,()=>{
    console.log(`app is  listening on port ${port}`)
})

/
// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;
//     let htmls=`<h1>Welcome to the @${username}</h1>`;
//     res.send(htmls);
// })

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("No search for this query!!");
    }
    else{
        res.send(`Your Query for search is:${q}`);
    }
})

// app.get("*",(req,res)=>{
//     res.send("Invalid operation");
// })

// app.get("/",(req,res)=>{
//     res.send("Root operation");
// })

