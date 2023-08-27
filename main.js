let http= require('http');
let fs= require('fs');

server= http.createServer((req,res)=>{

    if(req.url=='/'){
        data= fs.readFileSync('home.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/about'){
        data= fs.readFileSync('about.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/contact'){
        data= fs.readFileSync('contact.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/terms'){
        data= fs.readFileSync('terms.html','utf-8');
        res.end(data);
    }

});

server.listen(8080);
console.log("server create success");
