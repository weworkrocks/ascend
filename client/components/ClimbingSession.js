import React, {Component} from 'react'
import {SampleUtility} from '../store/sample'

const {getUserMainStats} = SampleUtility

export default class ClimbingSession extends Component {
  render() {
    console.log('func return - - - - -> ', getUserMainStats(1))
    return <div>HELLO REACT</div>
  }
}
