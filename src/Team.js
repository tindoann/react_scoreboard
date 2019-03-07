import React, { Component } from 'react'; 
import { inlineArrayTransformer } from 'common-tags'; 

class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: props.initialScore, 
      teamName: props.teamName
    }
  }

  addOneToScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }
 
  subtractOneFromScore = () => {
    this.setState({
      score: this.state.score - 1
    })
  }

  render() {
    return (
      <section>
        <h2 className='name'>{this.state.teamName}</h2>
        <p>{this.state.score}</p>
        <ul>
          <li>
            <label>Update Team Name</label>
            <input type="text" value={this.state.teamNames} onChange={this.updateTeamName} />
          </li>
        </ul>
      </section>
    )
  }
}