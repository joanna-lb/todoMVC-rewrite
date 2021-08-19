
import axios from "axios";
import {TodoType} from "../types";


export const BASE_URL = 'http://localhost:3000/todos'
// const updateTodoAction = (id, data) => axios.patch(`${BASE_URL}/${id}`, data)

const fetchTodoList=()=>
   // axios.get(BASE_URL)
    fetch(`/api/test/todos`,{
        method:'GET',
        mode:'no-cors',
        credentials:'include',
    }).then((response)=>{
        console.log(response);
        return response.json()
    }).then(response=>
        console.log(response)
    ).catch(e=>{
        console.log(e)
    })


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