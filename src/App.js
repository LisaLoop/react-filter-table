import React from 'react';
import logo from './logo.svg';
import './App.css';

import cats from "./data/cats";
import CatTable from "./features/cat-table";

function App() {
  return (
    <div className="App">
      <CatTable cats={cats} />
    </div>
  );
}

export default App;
