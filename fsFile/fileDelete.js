var fs =require('fs');
var http = require('http');

var server = http.createServer(function(req,res)
 {
    if(req.url=='/')
    {
      fs.unlink('do.txt',function(error){

           if(error)
           {
               res.writeHead(200,{'Content-type':'text/html'});
               res.write("file rename failed");
               res.end();

           }    
           else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.write("file rename success");
            res.end();


           }




      })



    }






} );

 server.listen(5050);
 console.log("Server run success");