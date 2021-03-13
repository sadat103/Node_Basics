var  http = require('http');
var  URL = require('url');

var server = http.createServer(function(req,res){
    
    var myURL = 'http://rabbil.com/blog.html?year=2020&month=july'
    var myURLObj= URL.parse(myURL,true);

    var myHostName = myURLObj.host;

    var myPathName = myURLObj.pathname;
    var mySearchName = myURLObj.search;

    res.writeHead(200,{'content-type':'text/html'})
          
    res.write(myPathName);
    res.end();


});

server.listen(5050);
console.log("Server run success");