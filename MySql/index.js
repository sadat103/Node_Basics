var mysql = require('mysql');

var DatabaseConnectionConfig ={

         host:"localhost",
         user:"root",
         password:"",

         database:"School"


}

var con=mysql.createConnection(DatabaseConnectionConfig);
con.connect(function(error){
    if(error){
        console.log("Connection fail")
    }
    else{
        console.log("Connection success")
        InsertData(con);
    }

});



function InsertData(con){

    let SQL_commands ="INSERT INTO `students_list`(`name`, `phone_number`, `class`, `roll`, `city`) VALUES ('SADAT','01','Ten','017000000','Dhaka')"
    con.query(SQL_commands,function(error){

          if(error){
              console.log("Failed");
          }
          else{
              console.log("Data insert success");
          }

    })
}