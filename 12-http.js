const http= require('http');

const server =  http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('about')
    }
    res.end(`
    <h1>Page not found</h1><br/>
    <a href="/">Back home</a>
    `)
})

server.listen(5000)