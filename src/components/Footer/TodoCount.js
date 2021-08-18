"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const shared_1 = require("../../shared");
const TodoCount = ({ todos }) => {
    return (react_1.default.createElement("span", { className: 'todo-count' }, `${shared_1.leftItemsCount(todos)} item left`));
};
exports.default = TodoCount;
//# sourceMappingURL=TodoCount.js.map