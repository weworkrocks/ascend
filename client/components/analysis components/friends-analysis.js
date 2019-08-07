import React, {Component} from 'react'
import {
  LineChartWithToolTip,
  FriendsProgressDataParser
} from '../analysis components/line-graph'
import {connect} from 'react-redux'
import {getAllUsersThunk} from '../../store'
import {SampleUtility} from '../../store/sample'

const {getAllClimbingHistory} = SampleUtility

class FriendsAnalysis extends Component {
  async componentDidMount() {
    await this.props.fetchAllUsers()
  }

  render() {
    if (this.props.users.length === 0) return <div>Loading</div>
    const users = this.props.users.map(user => {
      const {id, email} = user
      return {
        id,
        email,
        key: null
      }
    })
    const data = FriendsProgressDataParser(getAllClimbingHistory(), users, [
      'Lester' /* Score Not Me. lol */
    ])
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>Friends Analysis</h3>
        <LineChartWithToolTip data={data} title="Friends Progress" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.allUsers
})

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(getAllUsersThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsAnalysis)
