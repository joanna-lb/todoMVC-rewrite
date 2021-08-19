"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const constants = tslib_1.__importStar(require("../../utils/constants"));
const Filters = ({ changeShowContent }) => {
    const [filterType, setFilterType] = react_1.useState('All');
    const handleClick = (filterType) => {
        changeShowContent(filterType);
        setFilterType(filterType);
    };
    return (react_1.default.createElement("ul", { className: 'filters' }, Object.keys(constants.FILTERS_TYPES).map((key) => (react_1.default.createElement("li", { key: key },
        react_1.default.createElement("a", { href: '#/', className: filterType === key ? 'selected' : 'display:none', onClick: () => handleClick(key) }, key))))));
};
exports.default = Filters;
//# sourceMappingURL=Filters.js.map