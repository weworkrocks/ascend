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
      isAnimated="true"
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
