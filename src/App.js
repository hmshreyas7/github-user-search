import React, { useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Following from './components/Following';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [userName, setUserName] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchText(inputValue);
  };

  const handleSearch = (event) => {
    if (event.code === 'Enter' || event.target.name === 'searchButton') {
      // Go to home page
      setUserName(searchText);
      if (location.pathname === '/') {
        history.push('/home');
      }
    }
  };

  return (
    <div className='app'>
      <Header
        onSearchInputChange={handleChange}
        onSearch={handleSearch}
        searchInput={searchText}
      />
      <Switch>
        <Route path='/home'>
          <Home user={userName} />
        </Route>
        <Route path='/following'>
          <Following user={userName} />
        </Route>
        <Route path='/'>
          <p>Use the search bar above to fetch data for a GitHub user.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
