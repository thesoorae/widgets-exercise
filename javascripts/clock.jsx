import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(){
    super();

    this.state = {time: new Date()};
  }
  // componentDidMount() {
  //   this.interval = setInterval()
  // }


  render(){
    console.log('inside render');
    return (<div className="clock">
    <ul>
      <h1>
        Clock
      </h1>
      <li>Time:</li>

      <li>:</li>
      <li>{this.state.time.toDateString}</li>
    </ul>
    </div>);
  }
}

export default Clock;
