import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import {Provider} from 'react-redux';
import configureStore, {history} from './store/configureStore';
import {ConnectedRouter} from 'react-router-redux';

const store = configureStore;

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}><App/></ConnectedRouter>
</Provider>, document.getElementById('root'));
