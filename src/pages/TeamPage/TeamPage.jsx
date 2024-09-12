import React from "react";
import { useParams } from "react-router-dom";

function TeamPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>Team {id} Page</h1>
        </div>
    );
}

export default TeamPage;
