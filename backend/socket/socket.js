import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {}  // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

io.on("connection", (socket) => {
  console.log("user is connected ", socket.id);

  const userId = socket.handshake.query.userId;

  if(userId !== undefined) userSocketMap[userId] = socket.id;

  // io.emit() is used to send event to all the clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on  - is used to listen to events and can be used on server and client side
  socket.on("disconnect", () => {
    console.log("user is disconnected", socket.id);
    delete userSocketMap[userId];   // delete the user that went offline from socket map
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
