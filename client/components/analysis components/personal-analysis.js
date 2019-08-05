import React, {Component} from 'react'
import {
  LineChartWithToolTip,
  PersonalProgressDataParser
} from '../analysis components/line-graph'
import {SampleUtility} from '../../store/sample'

export default class PersonalAnalysis extends Component {
  render() {
    const data = PersonalProgressDataParser(
      SampleUtility.getUserClimbingHistory(this.props.userId)
    )
    return (
      <div>
        <h3>Personal Analysis</h3>
        <LineChartWithToolTip data={data} title="Personal Progress" />
      </div>
    )
  }
}
