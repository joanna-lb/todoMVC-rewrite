"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAnyComplete = exports.leftItemsCount = exports.newTodos = void 0;
const nanoid_1 = require("nanoid");
const newTodos = (name) => {
    return {
        id: nanoid_1.nanoid(),
        name,
        isComplete: false
    };
};
exports.newTodos = newTodos;
const leftItemsCount = (todos) => {
    return todos.length > 0 &&
        todos.filter((todo) => !todo.isComplete).length;
};
exports.leftItemsCount = leftItemsCount;
const checkAnyComplete = (todos) => {
    return todos.length > 0 &&
        todos.filter((todo) => todo.isComplete).length > 0;
};
exports.checkAnyComplete = checkAnyComplete;
//# sourceMappingURL=index.js.map