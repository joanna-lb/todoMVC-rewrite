
import axios from "axios";
export const BASE_URL = 'http://localhost:3000/todos'
// const updateTodoAction = (id, data) => axios.patch(`${BASE_URL}/${id}`, data)

const fetchTodoList=()=>fetch(BASE_URL,{
    method:'GET',
      }
    )


const deleteTodoAction = (id:string) => {
    return axios.delete(`${BASE_URL}/${id}`)
}

const updateTodoAction = (id:string, data:object) => axios.patch(`${BASE_URL}/${id}`, data)

const createTodo = (todo:object) => {
   return axios.post(BASE_URL,todo)
}

export {updateTodoAction,
createTodo,fetchTodoList,deleteTodoAction}