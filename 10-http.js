const http=require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome to home page')
    }
    if(req.url==='/about'){
        res.end('here is the about page')
    }
    res.end(`
    <h1>Oops</h1>
<p>We cant find what you are looking for</p>
<a href="/">back home</a>`
    )
})

server.listen(3000)