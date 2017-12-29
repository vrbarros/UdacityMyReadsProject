import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore;

ReactDOM.render(<Provider store={store}>
  <BrowserRouter><App/></BrowserRouter>
</Provider>, document.getElementById('root'));
