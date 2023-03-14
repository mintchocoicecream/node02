var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser=require('body-parser');

var mysql=require('mysql');

var PORT=3000;
var app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var conn = mysql.createConnection({
    host: "192.168.99.100",
    user: "scott",
    password: "tiger",
    port: 3306,
    database: 'lecture'
});

app.use(express.static(path.join(__dirname, './../public')));
app.set('views', path.join(__dirname, './../views'));
app.set('view engine', 'ejs');

app.get('/intro', function(req,res){
    res.render('intro');
});
app.get('/dept/',function(req,res){
    //select
    var sql="select * from dept";
    conn.query(sql, function (err, result, fields) {
        if (err) throw err;
        // result.forEach(function(ele, idx){
        //     console.log(ele.DEPTNO, ele.DNAME, ele.LOC);
        // });
        res.render('dept/list', {result});
    });
});
app.post('/dept/', function(req,res){
    console.log(req.body);
    var sql="insert into dept values (?,?,?)";
    conn.query(sql, [req.body.deptno, req.body.dname, req.body.loc], function(err,result){
        res.redirect('./');
    });
});
app.get('/dept/add', function(req,res){
    res.render('dept/add');
});



conn.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    // db만들기
    // conn.query("CREATE DATABASE mydb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    //   });

    //create table
//     var sql = "CREATE TABLE IF NOT EXISTS dept (DEPTNO int(11) DEFAULT NULL,DNAME varchar(14) DEFAULT NULL,LOC varchar(13) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
   
    //insert 
    // var sql = "insert into dept values (1111,'전산팀','부산')";
    // var sql = "insert into dept values (2222,'영업팀','마산')";
    // var sql = "insert into dept values (3333,'회계팀','창원')";

    // console.log("Connected!");
//     conn.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created", result);
//   });
});

app.listen(PORT);