import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import TrafficLight from './components/TrafficLight';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js'
import 'jquery'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TrafficLight />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
