// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';

const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                React App
            </Link>

            <div className={`menu ${showMobileMenu ? 'active' : ''}`}>
                <ul>
                    {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                    {isAuthenticated && <li><Link to="/preferences">Preferences</Link></li>}
                    {isAuthenticated ? (
                        <li onClick={handleLogout}>Logout</li>
                    ) : (
                        <>
                            <li><Link to="/articles">Articles</Link></li>
                            <li><Link to="/news_feed">News Feed</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>

            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
