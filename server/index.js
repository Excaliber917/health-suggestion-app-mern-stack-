import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './db/connectDb.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
dotenv.config()
const app = express()
app.use(express.json());
app.use(cookieParser())
const port = process.env.PORT || 5001

app.use("/api/auth",authRoute)




app.listen(port,()=>{
    connectDb()
    console.log(`app is running on ${port} `)
})