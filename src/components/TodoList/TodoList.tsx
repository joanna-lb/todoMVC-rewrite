import React, {useEffect} from "react";
import {connect} from "react-redux";
import TodoItems from "./TodoItems";
import {todosType, todoType} from "../../redux/types";


type TodoListPropsType= {
    todos:todosType
}

const TodoList = ({todos}:TodoListPropsType) => {

    return (
        <section className='main'>
            <ul className="todo-list">
                {todos && todos.map(todo =>
                    <TodoItems
                        key={todo.id}
                        {...todo}

                    />
                )}
            </ul>
        </section>)


}
export default TodoList
