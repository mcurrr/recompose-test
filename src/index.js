import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';


const StoreInstance = Store();
window.store = StoreInstance;

ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
