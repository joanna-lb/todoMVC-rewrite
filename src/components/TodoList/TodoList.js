"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const TodoItems_1 = tslib_1.__importDefault(require("./TodoItems"));
const TodoList = ({ todos, deleteTodo, changeCompleteStatus }) => {
    return (react_1.default.createElement("section", { className: 'main' },
        react_1.default.createElement("ul", { className: "todo-list" }, todos && todos.map((todo) => react_1.default.createElement(TodoItems_1.default, Object.assign({ key: todo.id }, todo, { deleteTodo: deleteTodo }))))));
};
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
exports.default = TodoList;
//# sourceMappingURL=TodoList.js.map