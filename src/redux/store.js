"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const reducer_1 = tslib_1.__importDefault(require("./reducer"));
const redux_1 = require("redux");
exports.default = redux_1.createStore(reducer_1.default);
//# sourceMappingURL=store.js.map