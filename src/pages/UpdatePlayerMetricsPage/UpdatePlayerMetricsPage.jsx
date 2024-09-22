import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './UpdatePlayerMetricsPage.scss';

function UpdatePlayerMetricsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);
    const [goals, setGoals] = useState('');
    const [assists, setAssists] = useState('');

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/players');
                const allPlayers = Object.values(response.data).flat();
                const playerData = allPlayers.find(p => p.id === parseInt(id));
                if (playerData) {
                    setPlayer(playerData);
                    setGoals(playerData.goals);
                    setAssists(playerData.assists);
                }
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        };

        fetchPlayer();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/players/update/${id}`, {
                goals,
                assists
            });
            navigate(`/playerMetrics/${id}`);
        } catch (error) {
            console.error("Error updating player metrics:", error);
        }
    };

    if (!player) return <p>Loading...</p>;

    return (
        <div className="update-player-metrics">
            <h1 className="update-player-metrics__title">Update {player.name}'s Metrics</h1>
            <form className="update-player-metrics__form" onSubmit={handleSubmit}>
                <div className="update-player-metrics__field">
                    <label htmlFor="goals">Goals:</label>
                    <input
                        type="number"
                        id="goals"
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        required
                    />
                </div>
                <div className="update-player-metrics__field">
                    <label htmlFor="assists">Assists:</label>
                    <input
                        type="number"
                        id="assists"
                        value={assists}
                        onChange={(e) => setAssists(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="update-player-metrics__submit">Update</button>
            </form>
        </div>
    );
}

export default UpdatePlayerMetricsPage;
