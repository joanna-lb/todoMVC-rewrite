import React, {useEffect} from "react";
import {connect} from "react-redux";
import {leftItemsCount} from "../../shared";
import {TodoType} from "../../types";

interface TodoCountProps{
    todos:Array<TodoType>
}

const TodoCount = ({todos}:TodoCountProps) => {


    return (
        <span
            className='todo-count'>{`${leftItemsCount(todos)} item left`}
            </span>
    )
}

export default TodoCount