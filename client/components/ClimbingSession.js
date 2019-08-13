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
    const {session} = this.props
    const location = {
      name: 'LIC Cliffs',
      imageUrl: '/images/locations/LIC_Cliffs.jpg'
    }
    const {styling} = this.state

    return (
      <div className="card mb-4 d-flex" style={styling}>
        <h4 className="card-title text-center mb-1">
          Climb Session {session.id}
        </h4>
        <div className="card-overview d-flex d-column">
          <div className="card-img-wrapper">
            <img
              className="card-img-top"
              src={location.imageUrl}
              alt={location.name}
            />
          </div>
          <div>Location: {location.name}</div>
        </div>
        <div className="card-climbing-display-container">
          <div>Climbs:</div>
          <div className="d-flex">
            {session.climbs.map(climb => (
              <div key={`climb${climb.id}`} className="card-climbing-container">
                <div>Grade: {climb.difficulty}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
