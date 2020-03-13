"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Count = () => {
    const [count, setCount] = react_1.useState(0);
    const counter = () => {
        setCount(count + 1);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, count),
        react_1.default.createElement("button", { onClick: counter }, "click")));
};
exports.default = Count;
