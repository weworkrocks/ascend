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
      <table>
        <tr>
          <td>Hello</td>
          <td>I'm a Table</td>
        </tr>
      </table>
    </div>
  )
}

export const MainStatDataParser = data => {
  return [
    {
      value: data.firstThree.averageScore,
      name: 'When You Started'
    },
    {
      value: data.averageScore,
      name: 'Lifetime Average'
    },
    {
      value: data.previousThree.averageScore,
      name: 'Your Last Three'
    }
  ]
}
