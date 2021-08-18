import React, {useEffect} from "react";
//
import TodoItems from "./TodoItems";
// import { todoType} from "../../redux/types";
import {TodoType} from "../../types";


type TodoListPropsType= {
    todos:Array<TodoType>
}

const TodoList = ({todos}:TodoListPropsType) => {

    return (
        <section className='main'>
            <ul className="todo-list">
                {todos && todos.map((todo:TodoType) =>
                    <TodoItems
                        key={todo.id}
                        {...todo}

                    />
                )}
            </ul>
        </section>)


}
export default TodoList
