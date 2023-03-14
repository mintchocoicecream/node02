var mysql=require('mysql');

var conn = mysql.createConnection({
    host: "192.168.99.100",
    user: "scott",
    password: "tiger",
    port: 3306,
    database: 'lecture'
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

module.exports=conn;