import React from "react";
import { useParams } from "react-router-dom";

function PlayerMetricsPage({ playersData }) {
    const { id } = useParams();
    
    // Convert the ID from string to number for comparison
    const playerId = parseInt(id);

    // Combine all players into a single array
    const allPlayers = [];
    for (const teamId in playersData) {
        allPlayers.push(...playersData[teamId]);
    }

    // Find the player with the matching ID
    const player = allPlayers.find(p => p.id === playerId);

    return (
        <div className="player-metrics">
            {player ? (
                <>
                    <h1 className="player-metrics__title">{player.name}'s Metrics</h1>
                    <p className="player-metrics__goals">Goals: {player.goals}</p>
                    <p className="player-metrics__assists">Assists: {player.assists}</p>
                </>
            ) : (
                <p>Player not found.</p>
            )}
        </div>
    );
}

export default PlayerMetricsPage;
