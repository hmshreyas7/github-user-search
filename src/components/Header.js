import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return <header>
        <div>
            <div><Link to='/home'>Home</Link></div>
            <div><Link to='/following'>Following</Link></div>
            <div>
                <input onChange={props.onSearchInputChange} value={props.searchInput} onKeyDown={props.onSearch} name='searchInput' />
                <button name='searchButton' onClick={props.onSearch}>Search</button>
            </div>
        </div>
    </header>
}

export default Header;