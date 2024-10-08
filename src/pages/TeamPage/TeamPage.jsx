import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import PlayerGoalsBarChart from '../../components/PlayerGoalsBarChart/PlayerGoalsBarChart';
import './TeamPage.scss';

const TeamPage = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.get(`https://kick-metrics-api-a69304343da9.herokuapp.com/api/teams/${id}`);
                setTeam(response.data);
                setPlayers(response.data.players);
            } catch (error) {
                console.error('Error fetching team or players', error);
            }
        };

        fetchTeamData();
    }, [id]);

    return (
        <>
                <p className="update-page__nav">
                <Link to="/">Landing Page</Link> &gt; 
                <Link to="/home">Home Page</Link> &gt; 
                Team {id} Page
            </p>
        <div className="team-page">
            <h1>{team?.name || 'Team Page'}</h1>
            <div className="team-page__players">
                {players.map(player => (
                    <div key={player.id} className="player-card">
                        <h2 className="player-card__name">{player.name}</h2>
                        <div className="player-card__metrics">
                        <p>Age: {player.age}</p>
                        <p>Position: {player.position}</p>
                        <p>---METRICS---</p>
                            <p>Goals: {player.goals}</p>
                            <p>Assists: {player.assists}</p>
                        </div>
                        <Link to={`/updatePlayer/${player.id}`} className="player-card__button">
                            Update Metrics
                        </Link>
                    </div>
                ))}
            </div>
            <div className="team-page__chart">
                <PlayerGoalsBarChart players={players} />
            </div>
        </div>
        </>
    );
};

export default TeamPage;
