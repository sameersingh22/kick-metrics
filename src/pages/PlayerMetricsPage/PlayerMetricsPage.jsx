import React from "react";
import { Link, useParams } from "react-router-dom";
import './PlayerMetricsPage.scss';

function PlayerMetricsPage({ playersData }) {
    const { id } = useParams();
    const playerId = parseInt(id);

    const allPlayers = [];
    for (const teamId in playersData) {
        allPlayers.push(...playersData[teamId]);
    }


    const player = allPlayers.find((p) => p.id === playerId);

    console.log('Player Data:', player);

    return (
        <div className="player-metrics">
            <p className="player-metrics__nav">
                <Link to="/">Landing Page</Link> &gt; 
                <Link to="/home">Home Page</Link> &gt; 
                {player?.teamId ? (
                    <Link to={`/teams/${player.teamId}`}>Team {player.teamId} Page</Link>
                ) : (
                    "Team Not Found"
                )} &gt; 
                Player {player?.name || "Not Found"} Page
            </p>

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
