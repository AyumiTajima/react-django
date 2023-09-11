import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1';
import Basic2 from './components/Basic2';
import BasicUseEffect from './components/BasicUseEffect';



function App () {

  return (
    <div className="App">
      <Basic1 name="佐久間"/>
      <Basic2/>
      <BasicUseEffect/>
    </div>
  );
}

export default App;
