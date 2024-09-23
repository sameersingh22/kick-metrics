import React from "react";
import { Link } from "react-router-dom";
import './HomePage.scss';
import SoccerTeam from '../../assets/images/soccer-team.png';
import SoccerTeam2 from '../../assets/images/soccer-team3.png';

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
                <img src={SoccerTeam2} alt="Soccer Team"/>
            </div>
        </div>
    );
}

export default HomePage;
