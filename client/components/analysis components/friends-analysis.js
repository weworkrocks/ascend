import React, {Component} from 'react'
import {
  LineChartWithToolTip,
  FriendsProgressDataParser
} from '../analysis components/line-graph'
import {connect} from 'react-redux'
import {getAllUsersThunk} from '../../store'
import {SampleUtility} from '../../store/sample'

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
    const data = FriendsProgressDataParser(
      SampleUtility.getAllClimbingHistory(),
      users
    )
    return (
      <div>
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
