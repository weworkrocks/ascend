import React, {Component} from 'react'
import {colors} from 'britecharts'
import {
  LoadingChart,
  LineChartWithToolTip,
  FriendsProgressDataParser
} from '../analysis components/line-graph'
import {connect} from 'react-redux'
import {getAllUsersThunk} from '../../store'
import {SampleUtility} from '../../store/sample'
import {Button, ButtonToolbar} from 'react-bootstrap'

const {getAllClimbingHistory} = SampleUtility

class FriendsAnalysis extends Component {
  constructor() {
    super()
    this.state = {
      allUsers: [],
      selectedCount: 1,
      renderChart: true
    }
  }
  async componentDidMount() {
    await this.props.fetchAllUsers()
    const {users} = this.props
    await this.setState({
      allUsers: users.map(user => {
        const {id, email} = user
        return {
          id,
          email,
          activated: email === this.props.currentUser
        }
      }),
      selectedCount: 1
    })
  }

  toggleUser = async username => {
    let newState = {...this.state}
    newState.renderChart = false
    await this.setState(newState)

    newState.allUsers = newState.allUsers.map(user => {
      if (user.email === username) {
        if (user.activated) {
          if (newState.selectedCount === 1) {
            console.log('Must have at least one climber')
          } else {
            user.activated = false
            newState.selectedCount--
          }
          return user
        } else if (newState.selectedCount === 5) {
          console.log('Chart is full')
          return user
        } else {
          user.activated = true
          newState.selectedCount++
          return user
        }
      } else return user
    })
    newState.renderChart = true
    this.setState(newState)
  }

  render() {
    const colorScheme = colors.colorSchemas.britecharts
    let activatedIteration = -1
    const ColorSchemeIterator = () => {
      activatedIteration++
      return colorScheme[activatedIteration]
    }
    const {allUsers, renderChart} = this.state
    if (this.props.users.length === 0 || allUsers.length === 0)
      return <div>Loading</div>
    const data = FriendsProgressDataParser(getAllClimbingHistory(), allUsers)
    return (
      <div className="d-flex flex-column align-items-center mb-4">
        <h3>Friends Analysis</h3>
        <ButtonToolbar className="d-flex justify-content-around">
          {allUsers.map(user => {
            const {email} = user
            const color = user.activated ? ColorSchemeIterator() : null
            return (
              <Button
                className="mx-2 my-2"
                variant="secondary"
                key={email}
                onClick={() => this.toggleUser(email)}
                style={
                  user.activated
                    ? {
                        background: color,
                        border: `3px inset ${color}`,
                        'font-weight': 'bold'
                      }
                    : null
                }
              >
                {email}
              </Button>
            )
          })}
        </ButtonToolbar>
        {renderChart ? (
          <LineChartWithToolTip data={data} title="Friends Progress" />
        ) : (
          <LoadingChart />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.allUsers,
  currentUser: state.user.email
})

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(getAllUsersThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsAnalysis)
