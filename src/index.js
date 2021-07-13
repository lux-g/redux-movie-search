import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers';


//Store
const store = createStore(
  rootReducer,
  //redux does not do async, thunk allows async api calls
  //composeWithDevTools allows to view state in chrome
  composeWithDevTools(applyMiddleware(thunk))
)


ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

