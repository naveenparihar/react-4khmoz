import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 , minutes: 0, hours: 0 };
  }

  tick() {
  if(this.state.seconds == 59) {
  this.setState(state => ({ 
      seconds: 0
    }));
  } else {
  this.setState(state => ({ 
  seconds: state.seconds + 1
    }));
  }
  }
  ticks() {
   if(this.state.seconds == 59) {  this.setState(state => ({ 
      minutes: 0
    }));
  } else {
   this.setState(state => ({ 
   minutes: state.minutes + 1
    }));
  }
  
  }
  ticks2() {    
    this.setState(state => ({
      hours: state.hours + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.interval = setInterval(() => this.ticks(), 1000 * 60);
    this.interval = setInterval(() => this.ticks2(), 1000 * 60 * 60);


  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
       {this.state.hours}: {this.state.minutes}: {this.state.seconds}
      </div>
    );
  }
}


render(<Timer />, document.getElementById('root'));
