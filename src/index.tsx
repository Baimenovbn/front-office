import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FormProvider } from './store/form-context';
import logo from './assets/images/main-logo.png'

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <div className="main-logo">
        <img src={logo} alt="easy-tap" className="main-logo__photo"/>
      </div>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
