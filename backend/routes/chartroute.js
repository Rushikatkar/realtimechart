const express= require('express');
const router= express.Router();

router.post('/',(req,res)=>{
    const com=req.body;
    com.save();
  
});

module.exports=router
