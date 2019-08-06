import React, {Component} from 'react'
import {
  LineChartWithToolTip,
  PersonalProgressDataParser
} from '../analysis components/line-graph'
import {BarChart, MainStatDataParser} from '../analysis components/bar-graph'
import {SampleUtility} from '../../store/sample'
const {getUserClimbingHistory, getUserMainStats} = SampleUtility

export default class PersonalAnalysis extends Component {
  render() {
    const progressData = PersonalProgressDataParser(
      getUserClimbingHistory(this.props.userId)
    )
    const mainStatData = MainStatDataParser(getUserMainStats(this.props.userId))
    return (
      <div>
        <h3>Personal Analysis</h3>
        <LineChartWithToolTip data={progressData} title="Personal Progress" />
        <BarChart data={mainStatData} />
      </div>
    )
  }
}
