import React, {Component} from 'react'
import {VisualizationWidth, VisualizationMargin} from './analysis components'

export default class ClimbingSession extends Component {
  constructor(props) {
    // props:
    //  climbsessions
    //  location
    //
    super(props)
    this.state = {
      highlighted: false,
      styling: {
        width: VisualizationWidth(window.innerWidth),
        margin: VisualizationMargin
      }
    }
  }
  render() {
    // const {sessionNumber, climbs, location} = this.props

    // Test
    const sessionNumber = 2
    const location = {
      name: 'LIC Cliffs'
    }
    const {styling} = this.state

    return (
      <div className="card mb-4" style={styling}>
        <h6 className="card-title text-center mb-1">
          Climb Session {sessionNumber}
        </h6>
        <div>Location: {location.name}</div>
        <div>Climbs:</div>
        <p>5-5</p>
        <p>5-6</p>
        <p>5-7</p>
      </div>
    )
  }
}
