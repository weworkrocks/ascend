import React from 'react'
import {Line, Tooltip} from 'britecharts-react'

const ToolTipChildDataParser = prevData => {
  return {
    data: prevData.data.map(elem => ({
      name: elem.name,
      date: elem.date,
      value: elem.value
    }))
  }
}

export const LineChart = props => {
  return (
    <Line
      data={props.data}
      lineCurve="basis"
      margin={{top: 50, bottom: 50, left: 50, right: 50}}
      width="700"
      shouldShowLoadingState={!props.data}
      // colorSchema=
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
    const score = session.climbs.reduce((accum, climb) => {
      return accum + climb.score
    }, 0)
    return {
      date: session.date,
      value: score
    }
  })
  return {
    dataByTopic: [
      {
        topicName: 'Climbing',
        topic: 'Climbing Power',
        dates: csFormatted
      }
    ]
  }
}
