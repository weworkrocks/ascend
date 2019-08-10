import React from 'react'
import {Legend} from 'britecharts-react'
import {
  VisualizationWidth,
  VisualizationMargin,
  EarthTonesColorPalette
} from './'

export const LegendComponent = data => {
  return (
    <Legend data={data} height="200" width="200" margin={VisualizationMargin} />
  )
}

// export const LineGraphToLegendDataParser = climbingSessions => {
//     let data = climbingSessions.reduce((accum, session) => {
//         if(accum) {

//         }
//         return accum
//     },{})
//     return data
// }
