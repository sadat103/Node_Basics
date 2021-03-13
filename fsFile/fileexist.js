var fs =require('fs');
var http = require('http');

var server = http.createServer(function(req,res)
 {
    if(req.url=='/')
    {
      fs.exists('do.txt',function(error){

           if(error)
           {
               
               res.end('File ache');

           }    
           
           else{
            
            res.end('file nai');


           }




      })



    }






} );

 server.listen(5050);
 console.log("Server run success");