"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Filters_1 = tslib_1.__importDefault(require("./Filters"));
const TodoCount_1 = tslib_1.__importDefault(require("./TodoCount"));
require("./index.css");
const server_1 = require("../../server");
const shared_1 = require("../../shared");
const Footer = ({ todos, changeShowContent, clearComplete }) => {
    const handleClearComplete = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield todos.filter(todo => todo.isComplete).forEach(todo => {
            try {
                return server_1.deleteTodoAction(todo.id);
            }
            catch (e) {
                console.log(e);
            }
        });
        clearComplete();
    });
    return (react_1.default.createElement("footer", { className: 'footer' },
        react_1.default.createElement(TodoCount_1.default, { todos: todos }),
        react_1.default.createElement(Filters_1.default, { changeShowContent: changeShowContent }),
        react_1.default.createElement("button", { "data-testid": 'button', className: 'clear-completed', style: { visibility: shared_1.checkAnyComplete(todos) ? "visible" : "hidden" }, onClick: handleClearComplete }, "Clear completed")));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map