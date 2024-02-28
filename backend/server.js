import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { connectToMongoDB } from './db/mongodbConnection.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(express.json());   // to parse json from req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     res.send('Hello world!');
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log('app is running on server', PORT)
})