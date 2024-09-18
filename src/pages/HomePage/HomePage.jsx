import React from "react";
import { Link } from "react-router-dom";
import './HomePage.scss';

function HomePage() {
    return (
        <div className="home-page">
            <p className="home-page__nav">
                <Link to="/">Landing Page</Link> &gt; Home Page
            </p>
            <ul>
                <li>
                    <Link to="/teams/1">Team 1</Link>
                </li>
                <li>
                    <Link to="/teams/2">Team 2</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
