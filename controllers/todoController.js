import { createTodoService, deleteTodoService, getAllTodoService, getTodoByIdService, updateTodoService } from "../models/todoModel"

const handleResponse = (res, status, message, data=null) =>{
    res.status(status).json({
        status,
        message,
        data,
    })
}

export const createTodo = async (req, res, next) => {
    const {id, title, status, created_at} = req.body

    try{
        const newTodo = await createTodoService(id,title,status,created_at);
        handleResponse(res, 201, "Todo created Successfully", newTodo)  
    }catch(err){
        next(err);
    }
}

export const getAllTodos = async (req, res, next) => {
    //const {id, title, status, created_at} = req.body

    try{
        const todos = await getAllTodoService();
        handleResponse(res, 200, "Todo fetched Successfully", todos)  
    }catch(err){
        next(err);
    }
}

//Get single TODO
export const getTodoById = async(req,res, next) =>{
    try{
        const todo = await getTodoByIdService(req.params.id)
        handleResponse(res, 200, "Got Single item by id Successfully", todo)   
    }catch (err){
        next(err);
    }
}

//Delete todo
export const deleteTodo = async(req, res, next) => {
    try{
        const todos = await deleteTodoService(req.params.id);
        handleResponse(res, 200, "Todo Item Deleted Succssfully")
    }catch (err){
        next(err);
    }
}

//Update status of Todo
export const updateTodo = async (req,res,next) => {

    const {title, status} = req.body
    
    try{
        const todo = await updateTodoService(req.params.id, status)
        handleResponse(res, 200, "Todo status updated successfully", todo);
    }catch(err){
        next(err);
    }
}