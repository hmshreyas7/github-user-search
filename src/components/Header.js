import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = (props) => {
  return (
    <header className='app-header'>
      <div>
        <Link className='app-header-link' to='/home'>
          Home
        </Link>
      </div>
      <div>
        <Link className='app-header-link' to='/following'>
          Following
        </Link>
      </div>
      <div className='ui icon input app-header-input'>
        <input
          onChange={props.onSearchInputChange}
          value={props.searchInput}
          onKeyDown={props.onSearch}
          name='searchInput'
        />
        <i className='search icon'></i>
      </div>
    </header>
  );
};

export default Header;
