import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component={HomePage}/> 
      <Route  path='/' component={HatPage}/> 
    </Switch>
             
    </div>
  );
}

export default App;
