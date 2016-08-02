var firebase = require('firebase');
var config = require('./public/firebase_keys.js');

firebase.initializeApp(config);

var reactfire = require('reactfire');
var React = require('react')
var ReactDOM = require('react-dom');
var APP = require('./components/APP');

ReactDOM.render(<APP />, document.getElementById('react-container'));
