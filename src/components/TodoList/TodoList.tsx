import React, {useEffect} from "react";

import TodoItems from "./TodoItems";

import {TodoType} from "../../types";



type TodoListPropsType= {
    todos:Array<TodoType>
    deleteTodo:(id:string)=>void
    changeCompleteStatus:(id:string,status:boolean)=>void
    editTodoList:(id:string,name:string)=>void
}

const TodoList = ({todos,deleteTodo,changeCompleteStatus,editTodoList}:TodoListPropsType) => {

    return (
        <section className='main'>
            <ul className="todo-list">
                {todos && todos.map((todo:TodoType) =>
                    <TodoItems
                        key={todo.id}
                        {...todo}
                        deleteTodo={deleteTodo}
                        changeCompleteStatus={changeCompleteStatus}
                        editTodoList={editTodoList}
                    />
                )}
            </ul>
        </section>)


}

export default TodoList
