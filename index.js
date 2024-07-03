const fs = require('fs');

// Asynchronous read
// fs.appendFileSync('file.txt', "\nHello I am new Append", 'utf-8',(err)=>{
//     console.log('file appended successfully')
// })

// console.log(""+fs.readFileSync('file.txt'));

// fs.mkdir('dir1',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Directory created successfully');
//     }
// })

// fs.rmdir('dir1',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Directory deleted successfully');
//     }
// }

// fs.rename('file.txt','changeFile.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File renamed successfully');
//     }
// });

// fs.rename('changeFile.txt','file.t',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File renamed successfully');
//     }
// });

// const source = '/home/vivek-anand-singh/Documents/node-practice/file.txt';
// const destination = '/home/vivek-anand-singh/Documents/node-practice/dir1/file.txt';
// const path = require('path');

// fs.copyFile(source,destination,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File moved successfully');
//     }
// });




const {read} = require('fs');
const http = require('http');
const url = require('url'); 

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    const p = parsedUrl.pathname;
    res.setHeader('Content-Type','text/html');  
    if(p == '/login')
    {
        fs.readFile('login.html', (err, data) => {
            if (err) {
                res.write('<html><head><title>Error</title></head><body>');
                res.write('<h1>Error loading index.html</h1>');
                res.write('</body></html>');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }
    else
    {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.write('<html><head><title>Error</title></head><body>');
                res.write('<h1>Error loading index.html</h1>');
                res.write('</body></html>');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

const port = 3000;  
const host = 'localhost';

server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
})