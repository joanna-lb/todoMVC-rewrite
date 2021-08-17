
import axios from "axios";
import {todoType} from "../redux/types";


export const BASE_URL = 'http://localhost:3000/todos'
// const updateTodoAction = (id, data) => axios.patch(`${BASE_URL}/${id}`, data)

const fetchTodoList=()=>
    axios.get(BASE_URL)



const deleteTodoAction = (id:string) => {
    return axios.delete(`${BASE_URL}/${id}`)
}

const updateTodoAction = (id:string, data:object) => axios.patch(`${BASE_URL}/${id}`, data)


const updateAllTodosAction=(data:any,isComplete:object)=>{
  data.forEach((todo:todoType)=>axios.patch(`${BASE_URL}/${todo.id}`,isComplete))
}

const createTodo = (todo:object) => {
   return axios.post(BASE_URL,todo)
}

export {updateTodoAction,
createTodo,fetchTodoList,deleteTodoAction,updateAllTodosAction}