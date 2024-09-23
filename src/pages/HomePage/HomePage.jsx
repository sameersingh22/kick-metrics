import React from "react";
import { Link } from "react-router-dom";
import './HomePage.scss';
import SoccerTeam from '../../assets/images/soccer-team.png';

function HomePage() {
    return (
        <div className="home-page">
            <p className="home-page__nav">
                <Link to="/">Landing Page</Link> &gt; Home Page
            </p>
            <div className="home-page__teams">
                <div className="home-page__teams-content">
                    <div className="home-page__card">
                        <Link className="teamlink" to="/teams/1">Team 1</Link>
                    </div>
                    <div className="home-page__card">
                        <Link className="teamlink" to="/teams/2">Team 2</Link>
                    </div>
                </div>
                <img src={SoccerTeam} alt="Soccer Team" className="home-page__image" />
            </div>
        </div>
    );
}

export default HomePage;
