const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");
app.use((req,res,next)=>{
    req.responseTime=new Date(Date.now()).toString();
    console.log(req.method,req.path,req.responseTime,req.hostname);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hi im root");
})

app.use("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"Acess Denied!!");
});


app.get("/api",(req,res)=>{
    res.send("Data");
})

app.get("/err",(req,res)=>{
   abcd=abd;
})

app.get("/admin",(req,res)=>{
   throw new ExpressError(401,"Acess to admin is forbidden!!");
})


app.use((err,req,res,next)=>{
    let {status=500,message}=err;
    res.status(status).send(message);
});

app.get("/random",(req,res)=>{
    res.send("Hi im random");
})

app.listen(8080,()=>{
    console.log("server listening on port 8080!")
});

