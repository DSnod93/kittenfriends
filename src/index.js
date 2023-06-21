import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { kitten } from './kitten';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={kitten[0].id} name={kitten[0].name} email={kitten[0].email}/>
    <Card id={kitten[1].id} name={kitten[1].name} email={kitten[1].email}/>
    <Card id={kitten[2].id} name={kitten[2].name} email={kitten[2].email}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
