import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import {Provider} from "react-redux";
import store from './store';


const  storeObj = store();


ReactDOM.render(
  <Provider store={storeObj}>
    <App />
  </Provider>,
  document.getElementById('container')
);

