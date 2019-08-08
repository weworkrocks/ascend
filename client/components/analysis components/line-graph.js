import React from 'react'
import {Line, Tooltip} from 'britecharts-react'
import {colors} from 'britecharts'
import {
  VisualizationWidth,
  VisualizationMargin,
  EarthTonesColorPalette
} from './'

// export const LineChart = ({data}) => {
//   return (
//     <div className="D3Comp">
//       <Line
//         data={data}
//         lineCurve="basis"
//         margin={VisualizationMargin}
//         width={VisualizationWidth(window.innerWidth)}
//         shouldShowLoadingState={!data}
//         colorSchema={colors.colorSchemas.Britecharts}
//       />
//     </div>
//   )
// }

const LineChartChild = props => {
  return (
    <Line
      data={props.data}
      lineCurve="basis"
      margin={VisualizationMargin}
      width={VisualizationWidth(window.innerWidth)}
      shouldShowLoadingState={!props.data}
      // colorSchema={
      //   props.data.length === 1 ?
      //     colors.colorSchemas.Britecharts :
      //     EarthTonesColorPalette
      // }
      {...props}
    />
  )
}

export const LineChartWithToolTip = ({data, title}) => {
  return (
    <div className="D3Comp">
      <h4 className="text-center">{title}</h4>
      <Tooltip
        data={data}
        render={LineChartChild}
        title={title}
        topicLabel="topics"
      />
    </div>
  )
}

export const PersonalProgressDataParser = climbingSessions => {
  return {
    dataByTopic: [
      {
        topicName: 'MyClimbs',
        topic: 'Climbing Power',
        dates: climbingSessions.map(session => {
          const score = session.climbs.reduce((accum, climb) => {
            return accum + climb.score
          }, 0)

          return {
            date: session.date,
            value: score
          }
        })
      }
    ]
  }
}

export const FriendsProgressDataParser = (climbingSessions, users) => {
  const data = {dataByTopic: []}
  climbingSessions
    // .filter(
    //   session =>
    //     selectedClimbers.indexOf(
    //       users.find(user => user.id === session.userId).email
    //     ) > -1
    // )
    .map(session => {
      const climber = users.find(user => user.id === session.userId)
      const score = session.climbs.reduce((accum, climb) => {
        return accum + climb.score
      }, 0)

      if (climber.key === null) {
        data.dataByTopic.push({
          topicName: climber.email,
          topic: climber.email,
          dates: [
            {
              date: session.date,
              value: score
            }
          ]
        })

        users = users.map(user => {
          if (user.id === session.userId) {
            user.key = data.dataByTopic.length - 1
          }
          return user
        })
      } else {
        data.dataByTopic[climber.key].dates.push({
          date: session.date,
          value: score
        })
      }
    })
  return data
}
