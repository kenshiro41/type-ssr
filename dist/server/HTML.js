"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const HTML = props => {
    const { title, children } = props;
    return (React.createElement("div", null,
        React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("meta", { charSet: 'utf-8' }),
                React.createElement("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
                React.createElement("title", null, title)),
            React.createElement("body", null,
                React.createElement("div", { id: 'root', dangerouslySetInnerHTML: { __html: children } }),
                React.createElement("script", { src: '/bundle.js', async: true, charSet: 'utf-8' })))));
};
exports.default = HTML;
