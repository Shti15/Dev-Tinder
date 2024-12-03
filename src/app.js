//creating server in express js
const express=require('express');

const app=express();

app.listen(9988);
app.use("/test",(req,res)=>{
    res.send("test page!!!")
})
app.use("/",(req,res)=>{
    res.send("hello this is my dashboard!!!")
})
