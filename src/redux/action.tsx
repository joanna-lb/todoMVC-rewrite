import {
    ADD_TODO,
    SET_TODO_LIST,
    SET_ALL_TASKS_COMPLETE_STATUS,
    CHANGE_COMPLETE_STATUS,
    DELETE_TODO, EDIT_TODO_LIST, CLEAR_COMPLETE
} from "../utils/constants";
import {TodoType} from "../types";


const setTodoList=(todos:Array<TodoType>)=>{
    return ({type:SET_TODO_LIST,payload:{data:todos}})
}
const addTodo=(todo:TodoType)=>{
    return({type:ADD_TODO,payload: {todo:todo}})
}

const setAllTasksCompleteStatus=(status:boolean)=>{
    return({type:SET_ALL_TASKS_COMPLETE_STATUS,payload:{todo:{isComplete:status}}})
}

const changeCompleteStatus=(id:string,status:boolean)=>{

    return({type:CHANGE_COMPLETE_STATUS,payload:{todo:{id,isComplete: status}}})
}

const deleteTodo=(id:string)=>{

    return({type:DELETE_TODO,payload:{todo:{id}}})
}

const editTodoList=(id:string,name:string)=>{
    return({type:EDIT_TODO_LIST,payload:{todo:{id,name}}})
}

const clearComplete=()=>{
    return({type:CLEAR_COMPLETE})
}

export{setTodoList,addTodo,setAllTasksCompleteStatus,changeCompleteStatus,deleteTodo,editTodoList,clearComplete}