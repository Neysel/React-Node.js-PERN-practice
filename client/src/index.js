import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
// import reportWebVitals from './reportWebVitals';


export const Context = createContext(null)
// process.env.REACT_APP_API_URL
// process.env.REACT_APP_API_URL
console.log('react app url = ', process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }}>
    <App />
    </Context.Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
