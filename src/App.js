import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import SearchVisualizer from './components/SearchingVisualizer/SearchingVisualizer';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';

function App() {
  return (
    <div className="app">
     <NavBar />
      <Switch>
        <Route exact path = '/' component={SearchVisualizer} />
        <Route exact path = '/sortingvisualizer' component={SortingVisualizer} />
      </Switch>
    </div>
  );
}

export default App;
