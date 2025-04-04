import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./config/db"
import todoRoutes from "./routes/todoRoutes"
import errorHandling from "./middlewares/errorHandler"
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

//Routes
app.use("/api", todoRoutes)

//Error Handling middleware
app.use(errorHandling)
//Teesting POSTGRES Connection
app.get("/", async (req,res)=>{
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is : ${result.rows[0].current_database}`)
});
//Server Running


app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
})