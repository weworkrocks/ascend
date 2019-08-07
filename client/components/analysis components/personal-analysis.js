import React, {Component} from 'react'
import {
  LineChartWithToolTip,
  PersonalProgressDataParser
} from '../analysis components/line-graph'
import {BarChart, MainStatDataParser} from '../analysis components/bar-graph'
import PersonalOverview from './personal-overview'
import {SampleUtility} from '../../store/sample'
const {getUserClimbingHistory, getUserMainStats} = SampleUtility

export default class PersonalAnalysis extends Component {
  render() {
    const climbingHistoryUnparsed = getUserClimbingHistory(this.props.userId)
    const progressData = PersonalProgressDataParser(climbingHistoryUnparsed)
    const mainStatUnparsed = getUserMainStats(this.props.userId)
    const mainStatData = MainStatDataParser(mainStatUnparsed)
    return (
      <div className="d-flex flex-column align-items-center">
        <h2>Personal Analysis</h2>
        <BarChart data={mainStatData} />
        <PersonalOverview mainStat={mainStatUnparsed} />
        <LineChartWithToolTip data={progressData} title="Personal Progress" />
      </div>
    )
  }
}
