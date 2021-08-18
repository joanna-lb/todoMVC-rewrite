import {ADD_TODO, SET_TODO_LIST} from "../utils/constants";
import {TodoType} from "../types";


const setTodoList=(todos:Array<TodoType>)=>{
    return ({type:SET_TODO_LIST,payload:todos})
}
// const addTodo=(todo:TodoType)=>{
//     return({type:ADD_TODO,payload:todo})
// }

export{setTodoList}