const express=require('express');
const app=express();
// handling multiple routes
app.listen("9988")
// in this example o/p:handler 1 and in response:this is route handler 1 
//it will not go to route handler 2.
/*
app.use('/user',(req,res)=>{
    console.log("handler 1");
    res.send("this is route handler 1");
},(req,res)=>{
    console.log("handler 2");
    res.send("this is route handler 2")
}) */
// in this example next() is used for going to next route handler but as the code executes
//it will log handler 1 and then send response thisis route handler 1 and then og handler 2 but give error  becoz the connection was closed and hence cannot again send resopnse
/*app.use('/user',(req,res,next)=>{
    console.log("handler 1");
    res.send("this is route handler 1");
    next();
},(req,res)=>{
    console.log("handler 2");
    res.send("this is route handler 2")
})*/

// this example wil execute as handler 1 res send "this is route handler 2" handler 2 .
/*
app.use('/user',(req,res,next)=>{
    console.log("handler 1");
   
    next();
},(req,res)=>{
    console.log("handler 2");
    res.send("this is route handler 2");
})
*/
// multiple route handlers can also be given in array
app.use('/user',[(req,res,next)=>{
    console.log("handler 1");
   
    next();
},(req,res,next)=>{
    console.log("handler 2");
    next();
},(req,res)=>{
    console.log("handler 3");
    res.send("this is route handler 3");
}])
// you can also mismatch array 
//  app.use("/route",[rh1,rh2],rh3) will give same output