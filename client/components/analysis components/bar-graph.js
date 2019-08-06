import React from 'react'
import {Bar} from 'britecharts-react'
import {colors} from 'britecharts'
import {VisualizationWidth, VisualizationMargin} from './'

export const BarChart = ({data}) => {
  return (
    <div className="D3Comp">
      <h4 className="text-center">How Far You've Come</h4> {/* temp */}
      <Bar
        data={data}
        margin={VisualizationMargin}
        width={VisualizationWidth(window.innerWidth)}
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
