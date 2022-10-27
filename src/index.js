import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; 


// import reportWebVitals from './reportWebVitals';


// const root =  ReactDOM.createRoot(document.getElementById("root"));


// // Sintaxixs
// // const elemento = React.createElement(componente, propiedades,hijos)

// Debe tener la primera letra en mayuscula y el signo de cierre < />
// ReactDOM.render(<App />, root);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals();
