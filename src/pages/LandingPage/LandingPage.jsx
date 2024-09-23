import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss'; 
import SoccerPlayer from '../../assets/images/soccer-player.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page__content">
                <div className="landing-page__card">
                    <header className="landing-page__header">
                        <h1>Welcome to KickMetrics</h1>
                        <p>Your go-to place for player and team statistics.</p>
                    </header>
                    <section className="landing-page__features">
                        <h2>Features</h2>
                        <ul>
                            <li>View player metrics</li>
                            <li>Explore team details</li>
                            <li>Stay updated with the latest stats</li>
                        </ul>
                    </section>
                    <section className="landing-page__cta">
                        <h2>Get Started!</h2>
                        <p>Explore teams and players now.</p>
                        <Link to="/home" className="cta-button">Go to Home</Link> 
                    </section>
                </div>
            </div>
            <div className="landing-page__image">
                <img src={SoccerPlayer} alt="Soccer Player" />
            </div>
        </div>
    );
};

export default LandingPage;
