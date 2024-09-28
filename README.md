# KickMetrics

## Overview

KickMetrics is a web application designed to help youth soccer players and coaches track performance metrics and visualize development. The app allows users to view teams, select players, and edit player metrics, providing a streamlined way to monitor and improve soccer skills.

<a href="https://github.com/sameersingh22/kick-metrics-api">Check out the back end repo</a>

### Problem Space

Tracking soccer performance can be challenging for players and coaches due to inconsistent record-keeping and a lack of centralized tools for monitoring progress. KickMetrics addresses these issues by offering an easy-to-use platform for managing team and player metrics, making it simpler to identify strengths and areas for improvement.

### User Profile

- **Players**: Can view their team's roster and update their performance metrics by selecting their name from the list.
- **Coaches**: In future updates, coaches will have the ability to manage player metrics, providing oversight and detailed analysis.

### Features

1. **Team List**:
   - Users can view a list of teams available in the system. This feature allows users to select a team to see the players within it, providing an organized view of all teams and facilitating easy navigation.

2. **Player List**:
   - Once a team is selected, the app displays a list of players in that team. Users can view basic player information and click on player names to access detailed performance metrics.

3. **Edit Metrics**:
   - Users can click on a player's name to open an interface for editing their performance metrics. This feature includes forms to input data such as goals scored, assists, passing accuracy, and stamina, allowing for accurate and up-to-date tracking of player performance.

4. **Metric Tracking**:
   - The app tracks various performance metrics over time, such as goals, assists, passing accuracy, and stamina. This feature provides players and coaches with detailed insights into performance trends and areas for improvement.

5. **Progress Visualization**:
   - Performance metrics are visualized using charts and graphs. This feature helps users easily interpret data and observe progress or declines in performance metrics over time.

6. **Training Videos**:
   - KickMetrics integrates with the YouTube API to fetch relevant soccer training videos. These videos would provide users with valuable resources for improving their soccer skills.

7. **Game/Training Log**:
   - Players can add detailed logs after each game or training session. This feature allows users to record qualitative feedback, including observations and reflections, which complements quantitative performance metrics.

8. **Team Management**:
   - The app includes functionality for managing teams, such as adding or removing teams and updating team details. This ensures that the list of teams is always current and reflects any changes in team rosters.

9. **Player Profile Overview**:
   - Although player profiles are simplified, users can view an overview of a player's key information and recent metrics. 

10. **Search and Filter**:
    - Users can search and filter teams and players based on various criteria. This feature helps users quickly find specific teams or players and navigate through large datasets efficiently.

## Implementation

### Tech Stack

- **Frontend**: React for building the user interface, styled with Sass.
- **Backend**: Express.js for handling API requests and managing data.
- **Database**: MySQL for storing teams, players, and performance metrics.
- **Charting**: Chart.js or D3.js for visualizing performance metrics.
- **YouTube API**: Used to fetch and display soccer training videos.
- **Version Control**: Git for source control.

### APIs

- **YouTube API**: Fetches soccer training videos based on predefined search criteria (e.g., "youth soccer training," "soccer drills for beginners").

### Sitemap

1. **Home Page**:
   - Introduction to the app with options to view or select teams.
   
2. **Team Page**:
   - Displays a list of players for the selected team.
   
3. **Player Metrics Page**:
   - Allows users to edit and view performance metrics for a selected player.


### Data

- **Team Data**:
  - Team ID
  - Team Name
  - List of Players (linked by Player ID)
  
- **Player Data**:
  - Player ID
  - Name
  - Position
  - Performance Metrics (linked by Player ID)
  
- **Performance Metrics**:
  - Date
  - Goals Scored
  - Assists
  - Passing Accuracy
  - Stamina

## Endpoints

### GET /api/teams/:id
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

### GET /api/players/:id
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

### PUT /api/players/:id
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

## Roadmap

- **Week 1**:
  - Set up project structure (React, Express, MySQL).
  - Design database schema for teams, players, and performance metrics.
  - Implement the team list page and player list functionality.
  - Develop backend endpoints for fetching teams and player metrics.

- **Week 2**:
  - Implement editing functionality for player metrics.
  - Conduct testing to ensure data integrity and fix bugs.
  - Refine the UI and handle form validation and error management.

---

## Future Implementations

1. **User Accounts**: Implement authentication for coaches and players, allowing coaches to manage player metrics.
   
2. **Enhanced Metrics**: Integrate additional performance tracking features, such as advanced statistics and historical comparisons.
   
3. **Video Integration**: Add functionality for fetching and displaying training videos to support skill development.
