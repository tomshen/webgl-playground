import React from 'react';
import ThreesQuickstart from './experiments/ThreesQuickstart';
import "./App.css";

function App() {
  return (
    <div className="app">
      <header><h1>WebGL Playground</h1></header>
      <ThreesQuickstart />
    </div>
  );
}

export default App;
