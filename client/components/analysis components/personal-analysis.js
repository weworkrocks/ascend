import React, {Component} from 'react'
import {
  PersonalProgressChartWithToolTip,
  PersonalProgressDataParser
} from '../analysis components/line-graph'
import {SampleUtility} from '../../store/sample'

export default class PersonalAnalysis extends Component {
  render() {
    const data = PersonalProgressDataParser(
      SampleUtility.getUserClimbingHistory(this.props.userId)
    )
    return <PersonalProgressChartWithToolTip data={data} />
  }
}
