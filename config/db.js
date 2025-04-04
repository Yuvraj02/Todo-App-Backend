import pkg from "pg"
import { database, host, password, user } from "pg/lib/defaults"

const {Pool} = pkg

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

pool.on("connect", ()=>{
    console.log("Connection pool established with database")
})

export default pool