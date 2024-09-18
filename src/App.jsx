import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import PlayerMetricsPage from "./pages/PlayerMetricsPage/PlayerMetricsPage";
import './styles/main.scss';

function App() {
    const playersData = {
        1: [
            { id: 1, name: "Player 1", age: 20, position: "Striker", goals: 10, assists: 5 },
            { id: 2, name: "Player 2", age: 22, position: "Left Mid", goals: 7, assists: 8 },
            { id: 3, name: "Player 3", age: 19, position: "Right Wing", goals: 9, assists: 6 },
        ],
        2: [
            { id: 4, name: "Player 4", age: 21, position: "Center Forward", goals: 15, assists: 3 },
            { id: 5, name: "Player 5", age: 23, position: "Right Mid", goals: 5, assists: 10 },
        ]
    };

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="app__main">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/teams/:id" element={<TeamPage />} />
                        <Route
                            path="/playerMetrics/:id"
                            element={<PlayerMetricsPage playersData={playersData} />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;

//Add the arrow navigation