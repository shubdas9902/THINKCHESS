import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectToMongo from "./db/connectToMongoDB.js"
import authRoutes from "./routes/auth.js"
import comRoute from "./routes/communitypost.js"
import Reply from "./routes/comments.js"

const app= express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(cors())

dotenv.config()
const PORT= process.env.PORT

app.use("/api/auth",authRoutes)
app.use("/api/compost",comRoute)
app.use("/api/comments",Reply)

app.listen(PORT,()=>{
    connectToMongo()
    console.log(`Listening to ${PORT}`)
})