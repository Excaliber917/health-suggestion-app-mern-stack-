import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './db/connectDb.js'
import authRoute from './routes/auth.route.js'
dotenv.config()
const app = express()
app.use(express.json());
const port = process.env.PORT || 5001

app.use("/api/auth",authRoute)




app.listen(port,()=>{
    connectDb()
    console.log(`app is running on ${port} `)
})