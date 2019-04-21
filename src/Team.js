import React, { Component } from 'react'
import { inlineArrayTransformer } from 'common-tags'

// https://hackernoon.com/the-road-to-react-mastery-understanding-state-29ef20572bc9
// This sets up the 'Update Team Name' and 'Update Team Score' components 
// the constructor set the initial state that loads at the beginning
// set the super(props) gives us the ability to use props throughout 

class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: props.initialScore, 
      teamName: props.teamName
    }
  }

// ability to change the value of the state

  updateTeamName = event => { 
    this.setState({
      teamName: event.target.value
    })
  } 

  // increments the score 

  addOneToScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }


  // decreases the score 
  
  subtractOneFromScore = () => {
    this.setState({
      score: this.state.score - 1
    })
  }


  // Display the Team's Name and Score 
  // onChange event will watch the input changes and update the state
  // onChange method will trigger state update that will be passed to the child
  // input value and rendered on the screen. 
  // Whenever we need to update state from child component, we need to pass the function 
  // that will handle updating updateState as a prop updateStateProp

  render() {
    return (
      <section>
        <h2 className="name">{this.state.teamName}</h2>
        <p>{this.state.score}</p>
        <ul>
          <li>
            <label>Update Team Name</label>
            <input type="text" value={this.state.teamName} onChange={this.updateTeamName} />
          </li>
          <li>
            <label>Update Team Score</label>
            <button onClick={this.addOneToScore}>Add 1</button>
            <button onClick={this.subtractOneFromScore}>Subtract 1</button>
          </li>
        </ul>
      </section>
    )
  }
}

export default Team; 