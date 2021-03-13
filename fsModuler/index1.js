var fs = require('fs');
var http = require('http');


var server = http.createServer(function (req, res) {

    if (req.url = '/') {
        //asy
        fs.writeFile('demo.txt','Hello World',function(error)
        {
            if(error){
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('File write fail');
                res.end();

            }
            else{
              res.writeHead(200, { 'Content-Type': 'text/html' })
              res.write('File write success');
              res.end();


            }
        }

        );
        // syn write
        let error = fs.writeFileSync('demoSync.txt','Hello World');
        
        if(error){
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('File write fail');
                res.end();

            }
        else{
              res.writeHead(200, { 'Content-Type': 'text/html' })
              res.write('File write success');
              res.end();


            }
        

        
    } 


});

server.listen(4040);
console.log("Server run success");