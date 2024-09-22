import React from "react";
import { Link, useParams } from "react-router-dom";
import './TeamPage.scss';

function TeamPage({ playersData }) {
    const { id } = useParams();
    const teamId = parseInt(id, 10);
    const players = playersData[teamId] || [];

    return (
        <div className="team-page">
            <p className="team-page__nav">
                <Link to="/">Landing Page</Link> &gt; <Link to="/home">Home Page</Link> &gt; Team {teamId} Page
            </p>
            <h1>Team {teamId} Page</h1>
            <ul className="team-page__list">
                {players.length > 0 ? (
                    players.map((player) => (
                        <li key={player.id} className="team-page__player">
                            <h3>{player.name}</h3>
                            <p>Age: {player.age}</p>
                            <p>Position: {player.position}</p>
                            <Link to={`/playerMetrics/${player.id}`}>View Metrics</Link>
                            <Link to={`/updatePlayer/${player.id}`}>Update Metrics</Link>
                        </li>
                    ))
                ) : (
                    <p>No players found for this team.</p>
                )}
            </ul>
        </div>
    );
}

export default TeamPage;
