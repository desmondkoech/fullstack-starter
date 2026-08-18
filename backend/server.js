const express=require("express");const app=express();app.get("/api/hello",(req,res)=>res.json({msg:"Hello"}));app.listen(3000);
