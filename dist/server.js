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
const ReactDOMServer = __importStar(require("react-dom/server"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const App_1 = __importDefault(require("./app/App"));
const HTML_1 = __importDefault(require("./server/HTML"));
const app = express_1.default();
const port = 3001;
app.use(express_1.default.static(path_1.default.join(__dirname, './public')));
app.get('*', (req, res) => {
    const body = ReactDOMServer.renderToString(React.createElement(App_1.default, null));
    const html = ReactDOMServer.renderToString(React.createElement(HTML_1.default, { title: 'hello' }, body));
    res.setHeader('Content-Type', ['text/html', 'charset=utf-8']);
    res.send(`<!doctype html>${html}`);
});
app.listen(port, (req, res) => {
    console.log(`started port on http://localhost:${port}`);
});
// app.use(express.static(path.resolve(__dirname + '/client/public')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/public/index.html'));
// });
