import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route path="/home"></Route>
      <Route path="/following"></Route>
      <Route path="/">
        <p>Use the search bar above to fetch data for a GitHub user.</p>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
