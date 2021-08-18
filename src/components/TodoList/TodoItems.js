"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
require("./index.css");
// type TodoPropsType= {
//     id: string,
//     name: string,
//     isComplete: boolean
// }
const TodoItems = ({ id, name, isComplete }) => {
    // const todos=useAppSelector(state=>state.todos)
    // const dispatch=useAppDispatch()
    const [isEdit, setIsEdit] = react_1.useState(false);
    const [todoName, setTodoName] = react_1.useState(name);
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
    return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("li", { key: id, className: isComplete ? 'completed' : 'none' },
        !isEdit &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: 'view' },
                    react_1.default.createElement("div", { className: isComplete ? 'checkbox-checked' : 'checkbox-unchecked', onDoubleClick: () => setIsEdit(true) },
                        react_1.default.createElement("input", { className: 'checkbox-input', type: 'checkbox' }),
                        react_1.default.createElement("span", { className: 'list-items' }, name === '' ? name : todoName)),
                    react_1.default.createElement("span", { className: 'destroy', "data-testid": "destroy" }, "x"))),
        isEdit && react_1.default.createElement("input", { className: 'edit', value: todoName, 
            // onKeyUp={(e) => handleKeyUp(e, id, todoName)}
            onChange: (e) => setTodoName(e.target.value) }))));
};
exports.default = TodoItems;
//# sourceMappingURL=TodoItems.js.map