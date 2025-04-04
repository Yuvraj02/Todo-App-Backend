import pool from "../config/db"

export const getAllTodoService = async ()=>{
    const result = await pool.query("SELECT * FROM todos ORDER BY created_at DESC")
    return result.rows
}

export const getTodoByIdService = async (id)=>{
    const result = await pool.query(`SELECT * FROM todos where id = $1`, [id])
    return result.rows
}

export const deleteTodoService = async (id) =>{
    const result = await pool.query("DELETE FROM todos where id = $1", [id])
    return result.rows[0];
}

export const createTodoService = async (id, title, status, created_at) =>{
    const result = await pool.query("INSERT INTO todos (id,title, status, created_at) VALUES ($1, $2, $3, $4) RETURNING *", [id,title,status,created_at])  
    return result.rows[0];
}

export const updateTodoService = async (id,status) => {
    const result = await pool.query("UPDATE todos SET status = $1 WHERE id = $2 RETURNING *"  , [status,id])
    return result.rows[0];
}


