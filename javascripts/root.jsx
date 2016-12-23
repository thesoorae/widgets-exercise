import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';

const Root = () => (
  <div className="main-div">
    <div>
      <Tabs tabs={tabData} />
    </div>

    <div className='clock'>
      <Clock />
    </div>

</div>
);

const tabData = [{title: 'one', content: 'I am First'},
{title: 'two', content: 'second pane here'},
{title: 'three', content: 'third pane here'}];

module.exports = Root;
