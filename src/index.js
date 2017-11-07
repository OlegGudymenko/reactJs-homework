import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { myStore } from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store'

const store = configureStore()
console.log(store.getState())

store.subscribe( () => {console.log(store.getState(), 'store change')} )

ReactDOM.render(
   <Provider store={ store }>
      <App />
  </Provider>,
 document.getElementById('root'));

registerServiceWorker();
