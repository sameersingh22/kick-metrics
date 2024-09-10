import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import PlayerMetricsPage from "./pages/PlayerMetricsPage/PlayerMetricsPage";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="app__main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/teams" element={<TeamPage />} />
                        <Route path="/playerMetrics" element={<PlayerMetricsPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
