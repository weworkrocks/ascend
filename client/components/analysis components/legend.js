import React, {Component} from 'react'
import {Legend} from 'britecharts-react'
import {
  VisualizationWidth,
  VisualizationMargin,
  EarthTonesColorPalette
} from './'

export class LegendComponent extends Component {
  render() {
    const {data} = this.props
    return (
      <Legend data={data} numberFormat="," height={data.length * 25 + 25} />
    )
  }
}

// export const LineGraphToLegendDataParser = climbingSessions => {
//     let data = climbingSessions.reduce((accum, session) => {
//         if(accum) {

//         }
//         return accum
//     },{})
//     return data
// }
