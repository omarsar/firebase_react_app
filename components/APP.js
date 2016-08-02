var React = require('react');
var io = require('socket.io-client');

var APP = React.createClass({

  // mounts first
  componentWillMount(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect)
  },

  // connect function
  connect() {
    alert("Connected: " + this.socket.id);
  },

  render() {
    return (<h1>Hello World From React</h1>);
  }
});

module.exports = APP;