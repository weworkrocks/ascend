import React from 'react'
import {Line, Tooltip} from 'britecharts-react'

export const LineChart = props => {
  return (
    <Line
      data={props.data}
      lineCurve="basis"
      margin={{top: 50, bottom: 50, left: 50, right: 50}}
      width="700"
      // colorSchema=
      // isAnimated="true"
      {...props}
    />
  )
}

export const PersonalProgressChartWithToolTip = ({data}) => {
  return (
    <Tooltip
      data={data}
      render={LineChart}
      title="Personal Progress"
      topicLabel="topics"
    />
  )
}

export const PersonalProgressDataParser = climbingSessions => {
  const csFormatted = climbingSessions.map(session => {
    const difficulties = session.climbs
      .map(climb => climb.difficulty)
      .join(', ')
    const score = session.climbs.reduce((accum, climb) => {
      return accum + climb.score
    }, 0)
    return {
      topicName: difficulties,
      name: 1,
      date: session.date,
      value: score
    }
  })
  return {
    data: csFormatted
  }
}

// {
//   topicName: 'San Francisco',
//   name: 1,
//   date: '2017-01-16T16:00:00-08:00',
//   value: 1
// },
