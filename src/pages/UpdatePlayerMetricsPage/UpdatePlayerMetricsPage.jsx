import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UpdatePlayerMetricsPage.scss';
import { useParams } from 'react-router-dom';

const UpdatePlayerMetricsPage = () => {
    const [player, setPlayer] = useState(null);
    const [goals, setGoals] = useState('');
    const [assists, setAssists] = useState('');

    const { id } = useParams();

    const playerId = id; 

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/players/${playerId}`);
                setPlayer(response.data);
                setGoals(response.data.goals);
                setAssists(response.data.assists);
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        };

        fetchPlayer();
    }, [playerId]);

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/api/update/${playerId}`, { goals, assists }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        } catch (error) {
            console.error("Error updating player metrics:", error);
        }
    };

    return (
        <div className="update-player-metrics">
            <h1>Update Player Metrics</h1>
            {player && (
                <div className="update-player-metrics__form">
                    <label>
                        Goals:
                        <input
                            type="number"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                        />
                    </label>
                    <label>
                        Assists:
                        <input
                            type="number"
                            value={assists}
                            onChange={(e) => setAssists(e.target.value)}
                        />
                    </label>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
        </div>
    );
};

export default UpdatePlayerMetricsPage;
