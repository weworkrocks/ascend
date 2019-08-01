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
  // const reformattedData = ToolTipChildDataParser(props.data)
  // console.log(reformattedData)
  return (
    <Line
      // data={reformattedData}
      data={props.data}
      // lineCurve="basis"
      margin={{top: 50, bottom: 50, left: 50, right: 50}}
      width="700"
      shouldShowLoadingState={!props.data}
      // colorSchema=
      // isAnimated={!props.data}
      {...props}
    />
  )
}

// export const LineChart = ({data}) => {
//   // const reformattedData = ToolTipChildDataParser(props.data)
//   // console.log(reformattedData)
//   return (
//     <Line
//       data={data}
//       // lineCurve="basis"
//       margin={{top: 50, bottom: 50, left: 50, right: 50}}
//       width="700"
//       shouldShowLoadingState={!data}
//       // colorSchema=
//       // isAnimated={!props.data}
//       // {...props}
//     />
//   )
// }

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

// export const PersonalProgressDataParser = climbingSessions => {
//   const csFormatted = climbingSessions.map((session) => {
//     const difficulties = session.climbs
//       .map(climb => climb.difficulty)
//       .join(', ')
//     const score = session.climbs.reduce((accum, climb) => {
//       return accum + climb.score
//     }, 0)
//     return {
//       topicName: difficulties,
//       name: 1,
//       date: session.date,
//       value: score
//     }
//   })
//   return {
//     data: csFormatted
//   }
// }

// {
//   topicName: 'San Francisco',
//   name: 1,
//   date: '2017-01-16T16:00:00-08:00',
//   value: 1
// },
