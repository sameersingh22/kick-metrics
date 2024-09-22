import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./UpdatePlayerMetricsPage.scss";

const UpdatePlayerMetricsPage = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [goals, setGoals] = useState("");
    const [assists, setAssists] = useState("");

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/players/${id}`);
                setPlayer(response.data);
                setGoals(response.data.goals);
                setAssists(response.data.assists);
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        };

        fetchPlayer();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/api/update/${id}`, { goals, assists });
        } catch (error) {
            console.error("Error updating player metrics:", error);
        }
    };

    return (
        <div className="update-player-metrics">
            <p className="update-page__nav">
                <Link to="/">Landing Page</Link> &gt; 
                <Link to="/home">Home Page</Link> &gt; 
                <Link to={`/teams/${player?.teamId}`}>Team {player?.teamId} Page</Link> &gt;
                Update {player?.name}'s metrics
            </p>
            <h1>Update Player Metrics</h1>
            {player && (
                <div className="update-player-metrics__form">
                    <label>
                        Goals:
                        <input type="number" value={goals} onChange={(e) => setGoals(e.target.value)} />
                    </label>
                    <label>
                        Assists:
                        <input type="number" value={assists} onChange={(e) => setAssists(e.target.value)} />
                    </label>
                    <Link to={`/playerMetrics/${id}`}>
                        <button onClick={handleUpdate}>Update</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UpdatePlayerMetricsPage;
