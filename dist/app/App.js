"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Count_1 = __importDefault(require("./Count"));
const App = () => {
    return (React.createElement("div", null,
        React.createElement(Count_1.default, null),
        React.createElement("h1", null, "hello"),
        React.createElement("h2", null, "h"),
        React.createElement("div", null, "hg"),
        React.createElement("h2", null, "g")));
};
exports.default = App;
