const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors")
const {Server} = require("socket.io")

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin: "*",
        methods:["GET", "POST", "DELETE", "PUT"],
    },
});

io.on("connection", (socket)=>{
    console.log(`User Connected ${socket.id}`)

    socket.on("join_room", (data)=>{
        socket.join(data.room)
        socket.to(data.room).emit("define_marker", "circle")
        console.log(`User with ID: ${socket.id} joined in room: ${data.room}`)
    })

    socket.on("make_move", (data)=>{
        console.log(data)
        socket.to(data.room).emit("receive_move", data)
    })

    socket.on("disconnect", ()=>{
        console.log("User Disconnected", socket.id)
    })
})


server.listen(3001, ()=>{
    console.log("SERVER ON")
})
