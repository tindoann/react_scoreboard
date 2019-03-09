import React, { Component } from 'react'
import { inlineArrayTransformer } from 'common-tags'
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

  // increment the score 

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