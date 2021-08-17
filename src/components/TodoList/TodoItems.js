"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
require("./index.css");
const pages_1 = require("../../pages");
const reducers_1 = require("../../redux/reducers");
const hook_1 = require("../../redux/hook");
const TodoItems = ({ id, name, isComplete }) => {
    const todos = hook_1.useAppSelector(state => state.todos);
    const dispatch = hook_1.useAppDispatch();
    const [isEdit, setIsEdit] = react_1.useState(false);
    const [todoName, setTodoName] = react_1.useState(name);
    const [completeStyle, setCompleteStyle] = react_1.useState(false);
    react_1.useEffect(() => setCompleteStyle(isComplete), []);
    const handleKeyUp = (e, id, todoName) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const reg = new RegExp(/^\s+$/);
        if (e.keyCode === 13 && !reg.test(todoName) && todoName.length > 0) {
            yield pages_1.updateTodoAction(id, { name: todoName });
            yield dispatch(reducers_1.editTodoList({ id, name: todoName }));
            setIsEdit(false);
        }
        else if (todoName.length === 0 && e.keyCode === 13) {
            yield pages_1.deleteTodoAction(id);
            yield reducers_1.deleteTodo(id);
            setIsEdit(false);
        }
    });
    const handleComplete = (id, e) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (e.target.checked) {
            yield pages_1.updateTodoAction(id, { isComplete: true });
            reducers_1.changeCompleteStatus({ id, status: true });
            setCompleteStyle(true);
        }
        else {
            yield pages_1.updateTodoAction(id, { isComplete: false });
            reducers_1.changeCompleteStatus({ id, status: false });
            setCompleteStyle(false);
        }
    });
    const handleClickDestroy = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        console.log('destroy');
        yield pages_1.deleteTodoAction(id);
        dispatch(reducers_1.deleteTodo(id));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("li", { key: id, className: completeStyle ? 'completed' : 'none' },
        !isEdit && react_1.default.createElement("div", { className: 'view' },
            react_1.default.createElement("div", { className: completeStyle ? 'checkbox-checked' : 'checkbox-unchecked', onDoubleClick: () => setIsEdit(true) },
                " ",
                react_1.default.createElement("input", { className: 'checkbox-input', type: 'checkbox', onChange: (e) => handleComplete(id, e) }),
                react_1.default.createElement("span", { className: 'list-items' }, name === '' ? name : todoName)),
            react_1.default.createElement("div", { className: 'destroy', "data-testid": "destroy", onClick: () => handleClickDestroy(id) }, "\u2715")),
        isEdit && react_1.default.createElement("input", { className: 'edit', value: todoName, onKeyUp: (e) => handleKeyUp(e, id, todoName), onChange: (e) => setTodoName(e.target.value) }))));
};
exports.default = TodoItems;
//# sourceMappingURL=TodoItems.js.map