import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import App from './app/App';
import HTML from './server/HTML';

const app = express();
const port = 3001;
app.use(express.static(path.join(__dirname, './public')));
app.get('*', (req, res) => {
  const body = ReactDOMServer.renderToString(<App />);
  const html = ReactDOMServer.renderToString(<HTML title='hello'>{body}</HTML>);
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
