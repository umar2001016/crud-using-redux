// src/App.js

import React from 'react';
import ItemList from './Reducer/component';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>CRUD App</h1>
      <ItemList />
    </div>
  );
};

export default App;
