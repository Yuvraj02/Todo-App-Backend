import express from "express"
import path from 'path'

const port = 3000
const app = express();

const appPath = "E:\\React\\Todo App"

app.get("/",(req,res)=> {
    res.send(`<h1> Server Running Successfully </h1>`);
    console.log("GET METHOD initiated")
});

app.listen(port, ()=>{
    console.log(`Listening On Port ${port}`)
})

