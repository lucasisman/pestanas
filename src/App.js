import React from 'react';
import Tabs from './Tabs';

const App = () => {
  const tabData = [
    {
      label: 'Tab 1',
      content: 'This is the content of Tab 1',
      callback: () => console.log('Tab 1 clicked'),
    },
    {
      label: 'Tab 2',
      content: 'This is the content of Tab 2',
      callback: () => console.log('Tab 2 clicked'),
    },
    {
      label: 'Tab 3',
      content: 'This is the content of Tab 3',
      callback: () => console.log('Tab 3 clicked'),
    },
  ];

  return (
    <div className="App">
      <h1>Tabs Component</h1>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
