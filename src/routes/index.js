const express=require('express');
const router=express.Router();

router.get('/intro', function(req,res){
    res.render('intro');
});

module.exports=router;