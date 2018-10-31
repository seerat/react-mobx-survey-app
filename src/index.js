import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import store from './stores/index.js';


import * as serviceWorker from './serviceWorker';

const customHistory = createHistory();   

ReactDOM.render(
        <Router history={customHistory}>
            <Provider {...store} >
                <App />
            </Provider>
        </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
