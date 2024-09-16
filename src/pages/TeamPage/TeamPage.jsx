import React from "react";
import { Link, useParams } from "react-router-dom";

function TeamPage() {
    const { id } = useParams();

    const playersData = {
        1: [
            { id: 1, name: "Player 1", age: 20, position: "Striker", goals: 10, assists: 5 },
            { id: 2, name: "Player 2", age: 22, position: "Left Mid", goals: 7, assists: 8 },
            { id: 3, name: "Player 3", age: 19, position: "Right Wing", goals: 9, assists: 6 },
        ],
        2: [
            { id: 4, name: "Player 4", age: 21, position: "Center Forward", goals: 15, assists: 3 },
            { id: 5, name: "Player 5", age: 23, position: "Right Mid", goals: 5, assists: 10 },
        ]
    };

    const players = playersData[id] || [];

    return (
        <div className="team">
            <h1 className="team__title">Team {id} Page</h1>
            <ul className="team__list">
                {players.length > 0 ? (
                    players.map((player) => (
                        <li key={player.id} className="team__player">
                            <h3 className="team__player-name">{player.name}</h3>
                            <p className="team__player-age">Age: {player.age}</p>
                            <p className="team__player-position">Position: {player.position}</p>
                            <Link
                                to={`/playerMetrics/${player.id}`}
                                className="team__player-link"
                            >
                                View Metrics
                            </Link>
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
