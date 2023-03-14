const express=require('express');
const router=express.Router();
const pool=require('../modules/mysqlPool');

router.get('/',function(req,res){
    //select
    let sql="select * from dept";
    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        // result.forEach(function(ele, idx){
        //     console.log(ele.DEPTNO, ele.DNAME, ele.LOC);
        // });
        res.render('dept/list', {result});
    });
});
router.post('/', function(req,res){
    console.log(req.body);
    let sql="insert into dept values (?,?,?)";
    pool.query(sql, [req.body.deptno, req.body.dname, req.body.loc], function(err,result){
        res.redirect('./');
    });
});
router.get('/add', function(req,res){
    res.render('dept/add');
});
router.get('/:deptno', function(req,res){
    console.log(req.params.deptno);
    let sql="select * from dept where deptno=?";
    pool.query(sql, [req.params.deptno], function(err, result, fields){
        if(err) return res.render('dept/detail');
        res.render('dept/detail',{dept:result[0]});
    });
});
router.post('/:deptno', function(req,res){
    let arr=[req.body.dname, req.body.loc, req.params.deptno];
    let sql="update dept set dname=?, loc=? where deptno=?";
    pool.query(sql, arr, function(err, result){
        if(err) 
        
            return res.render('dept/detail', {dept:{deptno:req.body.deptno, dname:req.body.dname, loc:req.body.loc}});
        
        if(result.changedRows)
            res.redirect('./');
        else   
            res.render('dept/detail',  {dept:{deptno:req.body.deptno, dname:req.body.dname, loc:req.body.loc}});
    });
});
router.delete('/:deptno', function(req,res){
    let deptno=req.params.deptno;
    let sql=`delete from dept where deptno=${deptno}`;
    pool.query(sql, function(){
        res.status(200).send();
    });
});



module.exports=router;