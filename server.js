const http= require('http')
const fs= require('fs')
const port = 3000

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('D:/xampp/htdocs/bai8/b8.html',function(error,data){
        if (error){
            res.writeHead(404)
            res.write("error")
            
        }
        else{
            res.write(data)
        }
        res.end()
    })
    //res.write("error")


})
server.listen(port,function(error){
    if(error){
        console.log("something went wrong")
    }
    else{
        console.log("server is listening on port: "+port)
    }
})