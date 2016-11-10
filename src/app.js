import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import { Provider } from 'react-redux';
import AppConnector from './main-components/AppConnector.jsx';

// function initialize() {

    ReactDOM.render(
        <Provider store={Store}>
            <AppConnector />
        </Provider>,
        document.getElementById('root')
    );
// }