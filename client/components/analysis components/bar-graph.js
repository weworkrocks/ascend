import React from 'react'
import {Bar} from 'britecharts-react'
import {colors} from 'britecharts'

export const BarChart = ({data}) => {
  return (
    <div>
      <Bar
        data={data}
        margin={{top: 50, bottom: 50, left: 50, right: 50}}
        width="700"
        isAnimated="true"
        colorSchema={colors.colorSchemas.orange}
      />
    </div>
  )
}

export const MainStatDataParser = data => {
  return [
    {
      value: data.firstThree.totalScore / Math.min(3, data.totalSessions),
      name: 'When You Started'
    },
    {
      value: data.totalScore / data.totalSessions,
      name: 'Lifetime Average'
    },
    {
      value: data.previousThree.totalScore / Math.min(3, data.totalSessions),
      name: 'Your Last Three'
    }
  ]
}
