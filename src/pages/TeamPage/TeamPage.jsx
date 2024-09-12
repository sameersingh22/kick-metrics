import React from "react";
import { useParams } from "react-router-dom";

function TeamPage() {
    const { id } = useParams();

    const playersData = {
        1: [
            { name: "Player 1", age: 20, position: "Striker" },
            { name: "Player 2", age: 22, position: "Left Mid" },
            { name: "Player 3", age: 19, position: "Right Wing" },
        ],
        2: [
            { name: "Player 4", age: 21, position: "Center Forward" },
            { name: "Player 5", age: 23, position: "Right Mid" },
        ]
    };

    const players = playersData[id] || [];

    return (
        <div>
            <h1>Team {id} Page</h1>
            <ul>
                {players.length > 0 ? (
                    players.map((player, index) => (
                        <li key={index}>
                            <h3>{player.name}</h3>
                            <p>Age: {player.age}</p>
                            <p>Position: {player.position}</p>
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
