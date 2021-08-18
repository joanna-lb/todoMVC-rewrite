"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Filters_1 = tslib_1.__importDefault(require("./Filters"));
const TodoCount_1 = tslib_1.__importDefault(require("./TodoCount"));
require("./index.css");
const hook_1 = require("../../redux/hook");
const Server_1 = require("../../Server");
const reducers_1 = require("../../redux/reducers");
const shared_1 = require("../../shared");
const Footer = ({ changeShowContent, showContent }) => {
    const todos = hook_1.useAppSelector(state => state.todos);
    const dispatch = hook_1.useAppDispatch();
    const handleClearComplete = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield todos.filter(todo => todo.isComplete).forEach(todo => {
            try {
                return Server_1.deleteTodoAction(todo.id);
            }
            catch (e) {
                console.log(e);
            }
        });
        yield dispatch(reducers_1.clearComplete());
    });
    return (react_1.default.createElement("footer", { className: 'footer' },
        react_1.default.createElement(TodoCount_1.default, null),
        react_1.default.createElement(Filters_1.default, { changeShowContent: changeShowContent }),
        react_1.default.createElement("button", { "data-testid": 'button', className: 'clear-completed', style: { visibility: shared_1.checkAnyComplete(todos) ? "visible" : "hidden" }, onClick: handleClearComplete }, "Clear completed")));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map