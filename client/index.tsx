import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../app/App';

const render = () => {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
};

render();
