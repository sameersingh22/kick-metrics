import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import './PlayerMetricsPage.scss';

function PlayerMetricsPage() {
    const { id } = useParams();
    const location = useLocation();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/players');
                const allPlayers = Object.values(response.data).flat();
                const playerData = allPlayers.find(p => p.id === parseInt(id));
                setPlayer(playerData);
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        };

        fetchPlayer();
    }, [id, location.state?.updated]);

    if (!player) return <p>Loading...</p>;

    return (
        
        <div className="player-metrics">
            <p className="metrics-page__nav">
                <Link to="/">Landing Page</Link> &gt; 
                <Link to="/home">Home Page</Link> &gt;
                <Link to={`/teams/${player.teamId}`}>Team {player.teamId} Page </Link>  &gt;
                Player {player.id}
            </p>
            <h1 className="player-metrics__title">{player.name}'s Metrics</h1>
            <p className="player-metrics__item">Goals: {player.goals}</p>
            <p className="player-metrics__item">Assists: {player.assists}</p>
        </div>
    );
}

export default PlayerMetricsPage;
