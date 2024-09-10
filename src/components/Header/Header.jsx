import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__logo-container">
                <Link to="/">
                    <img src={logo} alt="App Logo" className="header__logo" />
                </Link>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li><Link to="/home" className="header__nav-item">Home</Link></li>
                    <li><Link to="/teams" className="header__nav-item">Teams</Link></li>
                    <li><Link to="/playerMetrics" className="header__nav-item">PlayerMetrics</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
