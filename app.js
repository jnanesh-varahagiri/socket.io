const express = require('express')
const app = express()
const http = require('http')
const server  = http.createServer(app)
const io = require('socket.io')(server)
app.use(express.static(__dirname+'/public'))    


server.listen(3000,()=>{
    console.log('Server started at port 3000')
})

io.on('connection' ,(socket)=>{
    console.log(socket.id," has connected")
    socket.on('newMessageToServer',(data)=>{
        console.log("data from Client " ,data)
        io.emit('new Mesage to Clients' , "hello")
    })
})
