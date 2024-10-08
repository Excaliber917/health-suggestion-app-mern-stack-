import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './db/connectDb.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.route.js';
import messageRouter from './routes/message.route.js';
import cors from 'cors'
const app = express()
dotenv.config()
const corsOptions = {
    origin: 'https://fithealth-frontend.onrender.com', //  frontend URL
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())
const port = process.env.PORT || 5001

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/mentalhealth", messageRouter)



app.listen(port, () => {
    connectDb()
    console.log(`app is running on ${port} `)
})