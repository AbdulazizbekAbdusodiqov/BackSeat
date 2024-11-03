import express from "express";
import { usersRouter } from "./routes/index.routes.js"
import { config } from "dotenv";
config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.static('public'));

app.use('/auth', usersRouter)

app.listen(PORT, ()=>{
    console.log("Port: " + PORT);
})