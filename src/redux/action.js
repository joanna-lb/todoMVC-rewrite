"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = exports.setTodoList = void 0;
const constants_1 = require("../utils/constants");
const setTodoList = (todos) => {
    return ({ type: constants_1.SET_TODO_LIST, data: todos });
};
exports.setTodoList = setTodoList;
const addTodo = (todo) => {
    return ({ type: constants_1.ADD_TODO, payload: { todo } });
};
exports.addTodo = addTodo;
//# sourceMappingURL=action.js.map