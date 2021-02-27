import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css";
import App from './components/App';



ReactDOM.render(
  <React.StrictMode>
    <div className="Site">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
