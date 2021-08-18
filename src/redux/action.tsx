import {ADD_TODO, SET_TODO_LIST, SET_ALL_TASKS_COMPLETE_STATUS, CHANGE_COMPLETE_STATUS} from "../utils/constants";
import {TodoType} from "../types";


const setTodoList=(todos:Array<TodoType>)=>{
    return ({type:SET_TODO_LIST,data:todos})
}
const addTodo=(todo:TodoType)=>{
    return({type:ADD_TODO,payload: {todo}})
}

const setAllTasksCompleteStatus=(status:boolean)=>{
    return({type:SET_ALL_TASKS_COMPLETE_STATUS,payload:{isComplete:status}})
}

const changeCompleteStatus=(id:string,status:boolean)=>{
    return({type:CHANGE_COMPLETE_STATUS,payload:{id,isComplete: status}})
}

export{setTodoList,addTodo,setAllTasksCompleteStatus,changeCompleteStatus}