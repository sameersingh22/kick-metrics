import React from "react";
import { Link, useParams } from "react-router-dom";
import './TeamPage.scss';

function TeamPage() {
    const { id } = useParams();

    const playersData = {
        1: [
            { id: 1, name: "Player 1", age: 20, position: "Striker", goals: 10, assists: 5, teamId: 1 },
            { id: 2, name: "Player 2", age: 22, position: "Left Mid", goals: 7, assists: 8, teamId: 1 },
            { id: 3, name: "Player 3", age: 19, position: "Right Wing", goals: 9, assists: 6, teamId: 1 },
        ],
        2: [
            { id: 4, name: "Player 4", age: 21, position: "Center Forward", goals: 15, assists: 3, teamId: 2 },
            { id: 5, name: "Player 5", age: 23, position: "Right Mid", goals: 5, assists: 10, teamId: 2 },
        ]
    };
    

    const players = playersData[id] || [];

    return (
        <div className="team-page">
            <p className="team-page__nav">
                <Link to="/">Landing Page</Link> &gt; <Link to="/home">Home Page</Link> &gt; Team {id} Page
            </p>
            <h1>Team {id} Page</h1>
            <ul className="team__list">
                {players.length > 0 ? (
                    players.map((player) => (
                        <li key={player.id} className="team__player">
                            <h3>{player.name}</h3>
                            <p>Age: {player.age}</p>
                            <p>Position: {player.position}</p>
                            <Link to={`/playerMetrics/${player.id}`}>View Metrics</Link>
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
