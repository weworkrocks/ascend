import React from 'react'
import {Line, Tooltip} from 'britecharts-react'
import {colors} from 'britecharts'

export const LineChart = props => {
  return (
    <Line
      data={props.data}
      lineCurve="basis"
      margin={{top: 50, bottom: 50, left: 50, right: 50}}
      width="700"
      shouldShowLoadingState={!props.data}
      colorSchema={colors.colorSchemas.Britecharts}
      {...props}
    />
  )
}

export const LineChartWithToolTip = ({data, title}) => {
  return (
    <Tooltip data={data} render={LineChart} title={title} topicLabel="topics" />
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
  climbingSessions.map(session => {
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
