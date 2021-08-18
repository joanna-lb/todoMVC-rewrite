"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTodoList = void 0;
const constants_1 = require("../utils/constants");
const setTodoList = (todos) => {
    return ({ type: constants_1.SET_TODO_LIST, payload: todos });
};
exports.setTodoList = setTodoList;
//# sourceMappingURL=action.js.map