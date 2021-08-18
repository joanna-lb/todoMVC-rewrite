import React, {useEffect} from "react";

import TodoItems from "./TodoItems";

import {TodoType} from "../../types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {deleteTodo} from "../../redux/action";


type TodoListPropsType= {
    todos:Array<TodoType>
    deleteTodo:(id:string)=>void
    changeCompleteStatus:(id:string,status:boolean)=>void
}

const TodoList = ({todos,deleteTodo,changeCompleteStatus}:TodoListPropsType) => {

    return (
        <section className='main'>
            <ul className="todo-list">
                {todos && todos.map((todo:TodoType) =>
                    <TodoItems
                        key={todo.id}
                        {...todo}
                        deleteTodo={deleteTodo}
                        // changeCompleteStatus={changeCompleteStatus}
                    />
                )}
            </ul>
        </section>)


}
// const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
//     deleteTodo:(id:string)=>{
//         dispatch(deleteTodo(id))
//     }
// });
// export type ActionType = {
//     type: string,
//     id?: number,
//     text?: string,
//     filter?: string
// // };
// const TodoItemContainer = connect( mapDispatchToProps)(TodoList);
export default TodoList
