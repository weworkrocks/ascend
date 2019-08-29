import React, {Component} from 'react'
import {
  LineChartWithToolTip,
  PersonalProgressDataParser
} from '../analysis components/line-graph'
import {
  MainStatBarChart,
  MainStatDataParser
} from '../analysis components/bar-graph'
import PersonalOverview from './personal-overview'
import ClimbingSession from '../ClimbingSession'
import {SampleUtility} from '../../store/sample'
const {
  getUserClimbingHistory,
  getUserMainStats,
  getUserClimbingHistoryTopThreeClimbs
} = SampleUtility

export default class PersonalAnalysis extends Component {
  renderClimbingSessions = sessions => {
    return sessions.map(session => (
      <ClimbingSession session={session} key={session.id} />
    ))
  }
  render() {
    const climbingHistoryUnparsed = getUserClimbingHistory(this.props.userId)
    const climbingHistoryWithTop3 = getUserClimbingHistoryTopThreeClimbs(
      this.props.userId
    )
    const progressData = PersonalProgressDataParser(climbingHistoryUnparsed)
    const mainStatUnparsed = getUserMainStats(this.props.userId)
    const mainStatData = MainStatDataParser(mainStatUnparsed)
    return (
      <div className="d-flex flex-column align-items-center mb-4">
        <h2>Personal Analysis</h2>
        <MainStatBarChart data={mainStatData} />
        <PersonalOverview mainStat={mainStatUnparsed} />
        <LineChartWithToolTip data={progressData} title="Personal Progress" />
        {/* {this.renderClimbingSessions(climbingHistoryWithTop3)} */}
      </div>
    )
  }
}
