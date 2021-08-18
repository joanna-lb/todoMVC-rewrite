"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const TodoCount_1 = tslib_1.__importDefault(require("./TodoCount"));
require("./index.css");
const Footer = ({ showContent, todos }) => {
    // const handleClearComplete =async () => {
    //     await   todos.filter(todo=>todo.isComplete).forEach(
    //         todo=> {
    //          try {
    //             return  deleteTodoAction(todo.id)
    //             }catch (e) {
    //              console.log(e)
    //          }
    //         }
    //     )
    //     await dispatch(clearComplete())
    // }
    return (react_1.default.createElement("footer", { className: 'footer' },
        react_1.default.createElement(TodoCount_1.default, { todos: todos })));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map