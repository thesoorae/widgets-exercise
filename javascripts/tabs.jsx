import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.createTabs = this.createTabs.bind(this);
    this.state = {tabs: props.tabs, currentIndex: 0};
  }

  tabClick(i){
    this.setState({currentIndex: i});
  }
  createTabs(){
    return(
      this.state.tabs.map((tab, idx) => (
        <li key={idx}>
          <h1 onClick={this.tabClick.bind(this,idx)}>{tab.title}</h1>
        </li>
      )));
  }
  render(){
    return (<div className="tabs">
      <ul>
        {this.createTabs()}
      </ul>
      <br />
      <article>{this.state.tabs[this.state.currentIndex].content}</article>
    </div>);
  }
}

export default Tabs;
