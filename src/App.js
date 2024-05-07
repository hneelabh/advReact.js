import React, { Component } from 'react';
import './App.css';

import FragmentDemo from './components/1_FragmentDemo';
import Table from './components/2_Table';
import ParentComp from './components/3_ParentComp';
import RefsDemo from './components/5_RefsDemo';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo/>
      <Table/> 
      <ParentComp/>*/}
      <RefsDemo/>
    </div>
  );
}

export default App;
