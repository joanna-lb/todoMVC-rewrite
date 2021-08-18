"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Todo_1 = tslib_1.__importDefault(require("./todo/Todo"));
// import store from "./redux/store";
function App() {
    return (React.createElement("div", null,
        React.createElement(Todo_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=app.js.map