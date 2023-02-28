const express=require("express");
const {connection}=require("./config/db")
const env = require("dotenv");
const router = require("./routes/postRoute");
const cors = require("cors");
env.config();

const app=express();
app.use(express.json())

app.use(cors({
    origin: "*"
}));

app.use('/',router)


app.listen(process.env.port||8080,async ()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port} `)
})