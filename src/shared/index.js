"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newTodos = void 0;
const nanoid_1 = require("nanoid");
const newTodos = (name) => {
    return {
        id: nanoid_1.nanoid(),
        name,
        isComplete: false
    };
};
exports.newTodos = newTodos;
//# sourceMappingURL=index.js.map