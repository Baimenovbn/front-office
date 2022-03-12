import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './assets/images/main-logo.png'
import FormikForm from "./formik";

ReactDOM.render(
  <React.StrictMode>
    <div className="main-logo">
      <img src={logo} alt="easy-tap" className="main-logo__photo"/>
    </div>
    <FormikForm>
      <App />
    </FormikForm>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
