import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import '../node_modules/normalize.css/normalize.css';
import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './context/reducer';
import {ContextProvider} from './context/Context';


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
    <ContextProvider initialState={initialState} reducer={reducer}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
