import React, {Component} from 'react'

export default class ClimbingSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highlighted: false
    }
  }
  render() {
    const {sessionNumber, climbs, location} = this.props
    return (
      <div>
        <h5>Climb Session {sessionNumber}</h5>
      </div>
    )
  }
}
