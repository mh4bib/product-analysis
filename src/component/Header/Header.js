import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/reviews">REVIEWS</Link>
            <Link className="link" to="/dashboard">DASHBOARD</Link>
            <Link className="link" to="/blogs">BLOGS</Link>
            <Link className="link" to="/aboutus">ABOUT US</Link>
        </div>
    );
};

export default Header;