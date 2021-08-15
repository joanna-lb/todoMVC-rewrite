"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
// import TodoList from "../../components/TodoList/TodoList";
const Header_1 = tslib_1.__importDefault(require("../../components/Header/Header"));
const Description_1 = tslib_1.__importDefault(require("../../components/Description/Description"));
// import Footer from "../../components/Footer/Footer";
// import {connect} from "react-redux";
// import {FILTERS_TYPES} from "../../utils/constants";
// import {fetchTodoList, leftItemsCount} from "../../shared";
// import {setTodoList} from "../../redux/action";
const pages_1 = require("../../pages");
const reducers_1 = require("../../redux/reducers");
const TodoList_1 = tslib_1.__importDefault(require("../../components/TodoList/TodoList"));
const hook_1 = require("../../redux/hook");
function Todo() {
    const todos = hook_1.useAppSelector(state => state.todos);
    const dispatch = hook_1.useAppDispatch();
    const [showContent, setShowContents] = react_1.useState([]);
    react_1.useEffect(() => {
        pages_1.fetchTodoList().then(res => res.json()).then(data => {
            if (data) {
                setShowContents(data);
                dispatch(reducers_1.setTodoList(data));
            }
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "todoapp" },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(TodoList_1.default, { todos: showContent })),
        react_1.default.createElement(Description_1.default, null)));
}
exports.default = Todo;
//# sourceMappingURL=Todo.js.map