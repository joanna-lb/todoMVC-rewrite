import {nanoid} from "nanoid";
import * as types from '../redux/types'
import {TodoType} from "../redux/types";

const newTodos = (name:string) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}
const leftItemsCount = (todos:any) => {
    return todos.length>0 &&
        (todos).filter((todo:TodoType) => !todo.isComplete).length;
}

const checkAnyComplete = (todos:any) => {
    return todos.length>0 &&
    todos.filter((todo:TodoType) => todo.isComplete).length > 0
}

export {newTodos,leftItemsCount,checkAnyComplete}
