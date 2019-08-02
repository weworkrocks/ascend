import React from 'react'
import {Line, Tooltip} from 'britecharts-react'
import {colors} from 'britecharts'

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
        topicName: 'MyClimbs',
        topic: 'Climbing Power',
        dates: csFormatted
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
      let currentClimberData = data.dataByTopic[climber.key]
      currentClimberData.dates.push({
        date: session.date,
        value: score
      })
    }
  })
  return data
}
