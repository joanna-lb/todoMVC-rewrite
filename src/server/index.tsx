
import axios from "axios";
import {TodoType} from "../types";


export const BASE_URL = 'http://localhost:3002/todos'


const fetchTodoList=()=>
   axios.get(BASE_URL)



const deleteTodoAction = (id:string) => {
    return axios.delete(`${BASE_URL}/${id}`)
}

const updateTodoAction = (id:string, data:object) => axios.patch(`${BASE_URL}/${id}`, data)


const updateAllTodosAction=(data:Array<TodoType>,isComplete:object)=>{
  data.forEach((todo:TodoType)=>axios.patch(`${BASE_URL}/${todo.id}`,isComplete))
}


const createTodo = (todo:object) => {
   return axios.post(BASE_URL,todo)
}



export {
    updateTodoAction,
    createTodo,
    fetchTodoList,
    deleteTodoAction,
    updateAllTodosAction
}