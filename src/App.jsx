import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import PlayerMetricsPage from "./pages/PlayerMetricsPage/PlayerMetricsPage";
import UpdatePlayerMetricsPage from "./pages/UpdatePlayerMetricsPage/UpdatePlayerMetricsPage";
import './styles/main.scss';

function App() {
    const [playersData, setPlayersData] = React.useState({});

    React.useEffect(() => {
        const fetchPlayersData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/players');
                setPlayersData(response.data);
            } catch (error) {
                console.error("Error fetching players data:", error);
            }
        };

        fetchPlayersData();
    }, []);

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="app__main">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/teams/:id" element={<TeamPage playersData={playersData} />} />
                        <Route path="/playerMetrics/:id" element={<PlayerMetricsPage playersData={playersData} />} />
                        <Route path="/updatePlayer/:id" element={<UpdatePlayerMetricsPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
