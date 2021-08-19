"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
require("./index.css");
const server_1 = require("../../server");
const TodoItems = ({ id, name, isComplete, deleteTodo, changeCompleteStatus, editTodoList }) => {
    const [isEdit, setIsEdit] = react_1.useState(false);
    const [todoName, setTodoName] = react_1.useState(name);
    const handleKeyUp = (e, id, todoName) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const reg = new RegExp(/^\s+$/);
        if (e.keyCode === 13 && !reg.test(todoName) && todoName.length > 0) {
            yield server_1.updateTodoAction(id, { name: todoName });
            editTodoList(id, todoName);
            setIsEdit(false);
        }
        else if (todoName.length === 0 && e.keyCode === 13) {
            yield server_1.deleteTodoAction(id);
            deleteTodo(id);
            setIsEdit(false);
        }
    });
    const handleComplete = (id, e) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (e.target.checked) {
            yield server_1.updateTodoAction(id, { isComplete: true });
            changeCompleteStatus(id, true);
        }
        else {
            yield server_1.updateTodoAction(id, { isComplete: false });
            changeCompleteStatus(id, false);
        }
    });
    const handleClickDestroy = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield server_1.deleteTodoAction(id);
        deleteTodo(id);
    });
    return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("li", { key: id, className: isComplete ? 'completed' : 'none' },
        !isEdit &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: 'view' },
                    react_1.default.createElement("div", { className: isComplete ? 'checkbox-checked' : 'checkbox-unchecked', onDoubleClick: () => setIsEdit(true) },
                        react_1.default.createElement("input", { className: 'checkbox-input', type: 'checkbox', onChange: (e) => handleComplete(id, e) }),
                        react_1.default.createElement("span", { className: 'list-items' }, name === '' ? name : todoName)),
                    react_1.default.createElement("span", { className: 'destroy', "data-testid": "destroy", onClick: () => handleClickDestroy(id) }, "x"))),
        isEdit && react_1.default.createElement("input", { className: 'edit', value: todoName, onKeyUp: (e) => handleKeyUp(e, id, todoName), onChange: (e) => setTodoName(e.target.value) }))));
};
exports.default = TodoItems;
//# sourceMappingURL=TodoItems.js.map