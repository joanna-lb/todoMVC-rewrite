
import React, {useEffect, useState} from "react";
import './index.css'
import {deleteTodoAction, updateTodoAction} from "../../Server";
// import {changeCompleteStatus, deleteTodo, editTodoList} from "../../redux/reducers";
// import {useAppDispatch, useAppSelector} from "../../redux/hook";
// import * as types from '../../redux/types'
import {TodoType,TodoPropsType} from "../../types";

// type TodoPropsType= {
//     id: string,
//     name: string,
//     isComplete: boolean
// }

const TodoItems = ({id,name,isComplete}:TodoPropsType) => {
    // const todos=useAppSelector(state=>state.todos)
    // const dispatch=useAppDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const [todoName, setTodoName] = useState(name)

   //
   //  const handleKeyUp = async (e:any, id:string, todoName:string) => {
   //      const reg = new RegExp(/^\s+$/)
   //      if (e.keyCode === 13 && !reg.test(todoName) && todoName.length > 0) {
   //          await updateTodoAction(id, {name: todoName})
   //            await  dispatch(editTodoList({id, name:todoName})) ;
   //              setIsEdit(false)
   //      } else if (todoName.length === 0 && e.keyCode === 13) {
   //          await deleteTodoAction(id)
   //           await  deleteTodo(id)
   //              setIsEdit(false)
   //      }
   //
   //
   // }

    // const handleComplete = async (id: string, e: any) => {
    //     if (e.target.checked) {
    //         await updateTodoAction(id, {isComplete: true})
    //        dispatch(changeCompleteStatus({id, status: true}))
    //     } else {
    //         await updateTodoAction(id, {isComplete: false})
    //         dispatch(changeCompleteStatus({id, status: false}))
    //     }
    // }

    // const handleClickDestroy= async (id:string) => {
    //     await deleteTodoAction(id)
    //       dispatch(deleteTodo(id));
    // }

    return (
        <>
            {
                < li key={id} className={isComplete ?'completed': 'none'}>
                    {!isEdit &&
                        <>
                            < div className='view'>
                                <div
                                    className={isComplete ? 'checkbox-checked' : 'checkbox-unchecked'}
                                    onDoubleClick={() => setIsEdit(true)}
                                >
                                    <input className='checkbox-input' type='checkbox'
                                           // onChange={(e) => handleComplete(id, e)}
                                    />
                                    <span className='list-items'>{name === '' ? name : todoName}</span>
                                </div>
                                <span className='destroy' data-testid="destroy"
                                      // onClick={() => handleClickDestroy(id)}
                                >x
                            </span>
                            </div>

                        </>
                    }
                    {isEdit && <input className='edit' value={todoName}
                                   // onKeyUp={(e) => handleKeyUp(e, id, todoName)}
                                      onChange={(e) => setTodoName(e.target.value)}
                    />}

                </li>



            }

        </>
    )
};

export default TodoItems
