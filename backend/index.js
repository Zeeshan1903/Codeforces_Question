let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('pp'));

app.get('/',(req,res)=>{
    console.log('The query parameter in req, is :'+req.query);
    console.log('The path of the request is : '+req.path);
    const indexHtnl = path.join(__dirname,'./index.html')
    res.sendFile(indexHtnl);
    
})

app.post('/login',(req,res)=>{
    let htmlPath = path.join(__dirname,'./login.html');
    let jsPath = path.join(__dirname,'./login.js');

    console.log(req.body.handle);
    
    console.log('U left the home page and entered the login page successfully');


    fs.readFile(htmlPath,'utf-8',(err,htmlContent)=>{
        if(err){
            res.status(500).send('Internal server error while fetching the html file');
        }
        res.writeHead(200,'Content-Type','text/html');
        res.write(htmlContent);
    
        
        fs.readFile(jsPath,'utf-8',(err,jsContent)=>{
            if(err){
                res.status(500).send('Internal server error while fetching the js file');
            }
            res.write('<script>'+jsContent+'</script>');
            res.end('It is the end of the file here ********************');
        })
    })

})

app.listen(8000,()=>{
    console.log('Hi we started the port');
})
