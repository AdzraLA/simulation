const http =  require('http');

const server = http.createServer((req, res)  => {
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello RevoU!");
    } 
    else if(req.url === '/adzra'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello Adzra!");
    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("Salah URL!");

    }
});

const PORT = 3000;
const IP = '0.0.0.0';
server.listen(PORT, IP, () => {
    console.log('Server sudah jalan!');
});

