import React from 'react'
import {Bar} from 'britecharts-react'
import {colors} from 'britecharts'
import {VisualizationWidth, VisualizationMargin} from './'

export const MainStatBarChart = ({data}) => {
  const beginAvg = data[0].value
  const lifetimeAvg = data[1].value
  const currentAvg = data[2].value
  const growthFromBeg = ((currentAvg - beginAvg) / beginAvg * 100).toFixed(2)
  const growthFromLifeTime = (
    (currentAvg - lifetimeAvg) /
    lifetimeAvg *
    100
  ).toFixed(2)
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
      <table className="table table-bordered text-center">
        <thead>
          <tr className="table-success h3" style={{color: 'DarkGreen'}}>
            <th scope="col">
              <strong>{growthFromBeg}%</strong>
            </th>
            <th scope="col">
              <strong>{growthFromLifeTime}%</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Growth since Starting</strong>
            </td>
            <td>
              <strong>Higher than Average</strong>
            </td>
          </tr>
        </tbody>
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
