import React, {useEffect} from "react";

import TodoItems from "./TodoItems";
import { todoType} from "../../redux/types";


type TodoListPropsType= {
    todos:Array<todoType>
}

const TodoList = ({todos}:TodoListPropsType) => {

    return (
        <section className='main'>
            <ul className="todo-list">
                {todos && todos.map((todo:todoType) =>
                    <TodoItems
                        key={todo.id}
                        {...todo}

                    />
                )}
            </ul>
        </section>)


}
export default TodoList
