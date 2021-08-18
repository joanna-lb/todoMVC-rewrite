import {nanoid} from "nanoid";

import {TodoType} from "../types";

const newTodos = (name:string) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}
const leftItemsCount = (todos:Array<TodoType>) => {
    return todos.length>0 &&
        (todos).filter((todo:TodoType) => !todo.isComplete).length;
}

const checkAnyComplete = (todos:Array<TodoType>) => {
    return todos.length>0 &&
    todos.filter((todo:TodoType) => todo.isComplete).length > 0
}

export {newTodos,leftItemsCount,checkAnyComplete}
