import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App firstDaySunday={true} />, document.getElementById('root'));
registerServiceWorker();
