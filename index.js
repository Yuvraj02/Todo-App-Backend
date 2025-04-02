import express from "express"
import path from "path"

const port = 3000
const app = express();

app.use(express.static(path.join(__dirname, "../Todo App/dist")))

app.get("/",(req,res)=> {
    console.log("GET METHOD initiated")
    res.sendFile(path.join(__dirname, "../Todo App/dist/index.html"))
});

app.listen(port, ()=>{
    console.log(`Listening On Port ${port}`)
})