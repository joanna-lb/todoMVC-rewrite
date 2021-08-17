"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const app_1 = tslib_1.__importDefault(require("./app"));
require("./index.css");
const react_redux_1 = require("react-redux");
const store_1 = require("./redux/store");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(app_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map