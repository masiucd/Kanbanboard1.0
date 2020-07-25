import React from 'react';

import './App.css';
import List from './components/List';
import useMeasure from './hooks/useMeasure';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <List />
      </div>
    </div>
  );
}

export default App;
