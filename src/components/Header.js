import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return <header>
        <div>
            <div><Link to='/home'>Home</Link></div>
            <div><Link to='/following'>Following</Link></div>
            <div><input /></div>
        </div>
    </header>
}

export default Header;