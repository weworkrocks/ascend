import React, {Component} from 'react'
import {SampleUtility} from '../store/sample'

const {getUserTotalInfo} = SampleUtility

export default class ClimbingSession extends Component {
  render() {
    console.log('func return - - - - -> ', getUserTotalInfo(1))
    return <div>HELLO REACT</div>
  }
}
