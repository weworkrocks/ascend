import React, {Component} from 'react'
import {PersonalProgressChartWithToolTip} from '../analysis components/line-graph'
import {SampleUtility} from '../../store/sample'

const testData = {
  data: [
    {
      topicName: 'San Francisco',
      name: 1,
      date: '2017-01-16T16:00:00-08:00',
      value: 1
    },
    {
      topicName: 'San Francisco',
      name: 1,
      date: '2017-01-17T16:00:00-08:00',
      value: 2
    },
    {
      topicName: 'Oakland',
      name: 2,
      date: '2017-01-16T16:00:00-08:00',
      value: 3
    },
    {
      topicName: 'Oakland',
      name: 2,
      date: '2017-01-17T16:00:00-08:00',
      value: 7
    }
  ]
}

export default class PersonalAnalysis extends Component {
  render() {
    return <PersonalProgressChartWithToolTip data={testData} />
  }
}
