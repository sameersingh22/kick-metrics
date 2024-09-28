<div align="center">
<img src="https://raw.githubusercontent.com/sameersingh22/kick-metrics/refs/heads/develop/src/assets/images/logo.webp" alt="Project Logo"  width="200" height="200">
</div>

# KickMetrics
KickMetrics is a web application designed to help youth soccer players and coaches track performance metrics and visualize development. The app allows users to view teams, select players, and edit player metrics, providing a streamlined way to monitor and improve soccer skills.

<a href="https://github.com/sameersingh22/kick-metrics-api">Check out the back end repo</a>

## Table of Contents
- [Problem Space](#problem-space)
- [User Profile](#user-profile)
- [Features](#features)
- [Implementation](#implementation)
  - [Tech Stack](#tech-stack)
  - [APIs](#apis)
- [Sitemap](#sitemap)
- [Data](#data)
- [Endpoints](#endpoints)
  - [GET /api/teams/:id](#get-apiteamsid)
  - [GET /api/players/:id](#get-apiplayersid)
  - [GET /api/players](#get-apiplayers)
  - [PUT /api/players/:id](#put-apiplayersid)
- [Roadmap](#roadmap)
- [Future Implementations](#future-implementations)

### Problem Space <a name="problem-space"></a>

Tracking soccer performance can be challenging for players and coaches due to inconsistent record-keeping and a lack of centralized tools for monitoring progress. KickMetrics addresses these issues by offering an easy-to-use platform for managing team and player metrics, making it simpler to identify strengths and areas for improvement.

### User Profile <a name="user-profile"></a>

- **Players**: Can view their team's roster and update their performance metrics by selecting their name from the list.
- **Coaches**: In future updates, coaches will have the ability to manage player metrics, providing oversight and detailed analysis.

### Features <a name="features"></a>

1. **Team List:**
   - Users can view a list of teams available in the system. Selecting a team navigates to the team page, providing a structured overview of team members.

2. **Player List:**
   - Once a team is selected, the app displays the players belonging to that team, showing essential player information such as age, position, goals, and assists.

3. **Edit Player Metrics:**
   - Users can update player metrics, including goals and assists, by clicking on a player's name. This feature provides a direct link to an editing interface for updating performance data.

4. **Player Metrics Overview:**
   - The app allows users to view detailed performance metrics for individual players, displaying their goals and assists in a clear format.

5. **Player Goals Visualization:**
   - Player performance is visualized using D3.js, creating a bar chart that displays the goals scored by each player, allowing for easy comparison of team members' goal-scoring performance.

6. **Navigation:**
   - The app includes a user-friendly navigation system, allowing users to easily move between the landing page, home page, team pages, and player metrics pages.

### Implementation <a name="implementation"></a>

#### Tech Stack <a name="tech-stack"></a>
- **Frontend:** React for building the user interface, styled with Sass.
- **Backend:** Express.js for handling API requests and managing data.
- **Charting:** D3.js for visualizing player goals with bar charts.
- **Version Control:** Git for source control.

#### APIs <a name="apis"></a>
- **KickMetrics API:** Serves player and team data, providing endpoints for fetching player metrics and team information.

### Sitemap <a name="sitemap"></a>
- **Landing Page:** Welcomes users to KickMetrics with options to explore teams and players.
- **Home Page:** Lists teams available in the system for user selection.
- **Team Page:** Displays a roster of players for the selected team, including basic statistics and options to update player metrics.
- **Update Metrics Page:** Allows users to view and edit performance metrics for a specific player based on their UUID.

### Data <a name="data"></a>

- **Teams Data**:
  - Team ID
  - Team Name
  - List of Players (linked by Player ID)

- **Players Data**:
  - Player ID
  - Name
  - Age
  - Position
  - Goals
  - Assists
  - Team ID (linked to Team Data)

- **Performance Metrics**:
  - Player ID (linked to Players Data)
  - Goals Scored
  - Assists

## Endpoints <a name="endpoints"></a>

### GET /api/teams/:id <a name="get-apiteamsid"></a>
- **Description**: Returns details of a specific team, including a list of players in that team.
- **Response**:
    ```json
    {
      "id": "1",
      "name": "Team 1",
      "players": [
        {
          "id": "6e0d5a70-6f8f-4d02-9356-d1d8e0b2e69e",
          "name": "Jake Sullivan",
          "age": 20,
          "position": "Striker",
          "goals": 10,
          "assists": 5
        },
        {
          "id": "7cbb3c18-3fd3-4457-8ff5-4aaef9f3f0c9",
          "name": "Lucas Hernandez",
          "age": 22,
          "position": "Left Mid",
          "goals": 15,
          "assists": 7
        }
      ]
    }
    ```

### GET /api/players/:id <a name="get-apiplayersid"></a>
- **Description**: Fetches details of a specific player by their ID.
- **Response**:
    ```json
    {
      "id": "6e0d5a70-6f8f-4d02-9356-d1d8e0b2e69e",
      "name": "Jake Sullivan",
      "age": 20,
      "position": "Striker",
      "goals": 10,
      "assists": 5
    }
    ```
#### GET /api/players <a name="get-apiplayers"></a>

- Fetches details of all players. 
- **Response:**
```json
{
  "1": [
    {
      "id": "6e0d5a70-6f8f-4d02-9356-d1d8e0b2e69e",
      "name": "Jake Sullivan",
      "age": 20,
      "position": "Striker",
      "goals": 10,
      "assists": "5",
      "teamId": 1
    },
    ...
  ],
  "2": [
    {
      "id": "ec832c42-89a8-4e27-a4c6-1f0d504f5bcf",
      "name": "Alex Johnson",
      "age": 20,
      "position": "Striker",
      "goals": "12",
      "assists": "5",
      "teamId": 2
    },
    ...
  ]
}
```

### PUT /api/players/:id <a name="put-apiplayersid"></a>
- **Description**: Updates performance metrics for a player.
- **Request**:
    ```json
    {
      "goals": 12,
      "assists": 6
    }
    ```
- **Response**:
    ```json
    {
      "message": "Player metrics updated successfully"
    }
    ```

## Roadmap <a name="roadmap"></a>

- **Week 1**:
  - Set up project structure (React, Express).
  - Implement the team list page and player list functionality.
  - Develop backend endpoints for fetching teams and player metrics.

- **Week 2**:
  - Implement editing functionality for player metrics.
  - Conduct testing to ensure data integrity and fix bugs.
  - Refine the UI and handle form validation and error management.

---

## Future Implementations <a name="future-implementations"></a>

1. **Update Visual Design**: Revamp the website layout to create a more professional appearance, enhancing user experience and improving navigation.

2. **User Accounts**: Implement authentication for coaches and players, enabling secure access and allowing coaches to manage player metrics effectively.

3. **MySQL Database Integration**: Transition from a JSON file to a MySQL database for improved scalability, dynamic data management, and enhanced performance.

4. **Video Integration**: Add functionality for fetching and displaying training videos, supporting skill development and providing valuable resources for players.
