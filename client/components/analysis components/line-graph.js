import React, {Component} from 'react'
import {Line, Tooltip, Legend} from 'britecharts-react'
import {colors} from 'britecharts'
import {
  VisualizationWidth,
  VisualizationMargin,
  EarthTonesColorPalette
} from './'

export const LoadingChart = () => {
  return (
    <div className="D3Comp">
      <Line
        data={null}
        lineCurve="basis"
        margin={VisualizationMargin}
        width={VisualizationWidth(window.innerWidth)}
        shouldShowLoadingState={true}
      />
    </div>
  )
}

const LineGraphLegend = data => {
  return (
    <Legend data={data} height="200" width="200" margin={VisualizationMargin} />
  )
}

export const LineChart = ({data}) => {
  return (
    <div className="D3Comp">
      <Line
        data={data}
        lineCurve="basis"
        margin={VisualizationMargin}
        width={VisualizationWidth(window.innerWidth)}
        shouldShowLoadingState={!data}
        colorSchema={colors.colorSchemas.Britecharts}
      />
    </div>
  )
}

const LineChartChild = props => {
  return (
    <div>
      <Line
        data={props.data}
        lineCurve="basis"
        margin={VisualizationMargin}
        width={VisualizationWidth(window.innerWidth)}
        shouldShowLoadingState={!props.data}
        {...props}
      />
      {/* {LineGraphLegend(props.data)} */}
      {/* We need to reorganize the data to fit into the legend */}
    </div>
  )
}

export class LineChartWithToolTip extends Component {
  constructor({data, title}) {
    super({data, title})
    this.state = {
      data,
      title
    }
  }
  render() {
    const {data, title} = this.state
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
  let selectedClimbers = users.filter(user => user.activated)

  data.dataByTopic = selectedClimbers.map((user, i) => {
    selectedClimbers[i].key = i
    return {
      topicName: user.email,
      topic: user.email,
      dates: []
    }
  })

  climbingSessions
    .filter(session =>
      selectedClimbers.find(user => user.id === session.userId)
    )
    .map(session => {
      const climber = selectedClimbers.find(user => user.id === session.userId)
      const score = session.climbs.reduce((accum, climb) => {
        return accum + climb.score
      }, 0)
      data.dataByTopic[climber.key].dates.push({
        date: session.date,
        value: score
      })
    })
  return data
}
