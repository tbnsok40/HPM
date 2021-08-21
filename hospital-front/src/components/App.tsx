import React from 'react';
import { Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../style/App.css';
import Main from "./Main";
import TestPage from "./TestPage"


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Route path="/" component={Main} exact />
          <Route path="/testpage" component={TestPage} exact />

      </header>
    </div>
  );
}

export default App;
