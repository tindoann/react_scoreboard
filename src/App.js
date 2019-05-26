
import React, { Component } from 'react'; 
import './App.css'; 
import Team from './Team'; 

// This page sets up the header and initial 'teamName' section 
// Sets the initial logic of the program 

class App extends Component {
  render() {
    let teams = [
      {
        teamName: 'Team A',
        initialScore: 0
      },
      {
        teamName: 'Team B',
        initialScore: 0
      }
    ]

  // Sets up the header section of the scoreboard and change state when the user inputs information 
  // Also set up the overall content of the container

return (
  <div>
    <h1>My Scoreboard</h1>
    <main>
      {teams.map((team, index) => (
        <Team key={index} teamName={team.teamName} initialScore={team.initialScore} />
      ))}
    </main>
  </div>
  )
 }
}

export default App; 