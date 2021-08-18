"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const TodoCount_1 = tslib_1.__importDefault(require("./TodoCount"));
require("./index.css");
//
const Server_1 = require("../../Server");
// import {clearComplete} from "../../redux/reducers";
const shared_1 = require("../../shared");
const action_1 = require("../../redux/action");
const Footer = ({ showContent, todos }) => {
    const handleClearComplete = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield todos.filter(todo => todo.isComplete).forEach(todo => {
            try {
                return Server_1.deleteTodoAction(todo.id);
            }
            catch (e) {
                console.log(e);
            }
        });
        action_1.clearComplete();
    });
    return (react_1.default.createElement("footer", { className: 'footer' },
        react_1.default.createElement(TodoCount_1.default, { todos: todos }),
        react_1.default.createElement("button", { "data-testid": 'button', className: 'clear-completed', style: { visibility: shared_1.checkAnyComplete(todos) ? "visible" : "hidden" }, onClick: handleClearComplete }, "Clear completed")));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map