import {nanoid} from "nanoid";
import {todoType} from "../redux/types";


const newTodos = (name:string) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}
const leftItemsCount = (todos:any) => {
    return todos.length>0 &&
        (todos).filter((todo:todoType) => !todo.isComplete).length;
}

const checkAnyComplete = (todos:any) => {
    return todos.filter((todo:todoType) => todo.isComplete).length > 0
}

export {newTodos,leftItemsCount,checkAnyComplete}
