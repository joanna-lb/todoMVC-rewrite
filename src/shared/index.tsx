import {nanoid} from "nanoid";



const newTodos = (name:string) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}
// const leftItemsCount = (todos:TodoListType) => {
//     return todos.filter(todo => !todo.isComplete).length;
// }
export {newTodos}
