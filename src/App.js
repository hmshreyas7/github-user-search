import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setSearchText(inputValue);
    }

    const handleSearch = (event) => {
        if (event.code === 'Enter' || event.target.name === 'searchButton') {
            // Go to home page
            console.log('Works');
        }
    }

  return (
    <div className="App">
    <Header onSearchInputChange={handleChange} onSearch={handleSearch} searchInput={searchText} />
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
