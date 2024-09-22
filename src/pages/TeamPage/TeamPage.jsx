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
                const response = await axios.get(`http://localhost:8080/api/teams/${id}`);
                setTeam(response.data);
                setPlayers(response.data.players);
            } catch (error) {
                console.error('Error fetching team or players', error);
            }
        };

        fetchTeamData();
    }, [id]);

    return (
        <div className="team-page">
            <p className="team-page__nav">
                <Link to="/">Landing Page</Link> &gt; 
                <Link to="/home">Home Page</Link> &gt; 
                {team?.name || 'Team'}
            </p>
            <h1>{team?.name || 'Team Page'}</h1>
            <div className="team-page__players">
                {players.map(player => (
                    <div key={player.id} className="player-card">
                        <h2 className="player-card__name">{player.name}</h2>
                        <div className="player-card__metrics">
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
    );
};

export default TeamPage;
