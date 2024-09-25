import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UpdatePlayerMetricsPage.scss";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdatePlayerMetricsPage = () => {
  const [player, setPlayer] = useState(null);
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(
          `https://kick-metrics-api-a69304343da9.herokuapp.com/api/players/${id}`
        );
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
      await axios.put(
        `https://kick-metrics-api-a69304343da9.herokuapp.com/api/update/${id}`,
        { goals, assists },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate(`/teams/${player.teamId}`);
    } catch (error) {
      console.error("Error updating player metrics:", error);
    }
  };

  return (
    <>
      <p className="update-page__nav">
        <Link to="/">Landing Page</Link> &gt;
        <Link to="/home">Home Page</Link> &gt;
        <Link to={`/teams/${player?.teamId}`}>
          Team {player?.teamId} Page
        </Link>{" "}
        &gt; Update {player?.name}'s metrics
      </p>
      <div className="update-player-metrics">
        <h1 className="update-player-metrics__title">
          Update {player?.name}'s Metrics
        </h1>
        {player && (
          <div className="update-player-metrics__form">
            <div className="update-player-metrics__field">
              <label htmlFor="goals">Goals</label>
              <input
                type="number"
                id="goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>
            <div className="update-player-metrics__field">
              <label htmlFor="assists">Assists</label>
              <input
                type="number"
                id="assists"
                value={assists}
                onChange={(e) => setAssists(e.target.value)}
              />
            </div>
            <button
              className="update-player-metrics__submit"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdatePlayerMetricsPage;
