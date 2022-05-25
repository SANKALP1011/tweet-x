import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/Styles/index.css";
import "../src/Styles/ComponentsStyles/TextField.css";
import "../src/Styles/ComponentsStyles/RedButton.css";
import "../src/Styles/ComponentsStyles/Font.css";
import "../src/Styles/Form/Form.css";
import "../src/Styles/ComponentsStyles/CompanyLogo.css";
import "../src/Styles/ComponentsStyles/WhiteButton.css";
import "../src/Styles/ComponentsStyles/FeedCard.css";
import "../src/Styles/ComponentsStyles/Buttons.css";
import "../src/Styles/ComponentsStyles/UserCard.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

