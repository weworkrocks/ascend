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
  constructor() {
    super()
    this.state = {
      selectedUsers: []
    }
  }
  async componentDidMount() {
    await this.props.fetchAllUsers()
    this.setState({
      selectedUsers: [this.props.currentUser]
    })
  }

  render() {
    const {selectedUsers} = this.state
    if (this.props.users.length === 0 || selectedUsers.length === 0)
      return <div>Loading</div>
    const users = this.props.users.map(user => {
      const {id, email} = user
      return {
        id,
        email,
        key: null
      }
    })
    const data = FriendsProgressDataParser(
      getAllClimbingHistory(),
      users,
      selectedUsers
    )
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>Friends Analysis</h3>
        <LineChartWithToolTip data={data} title="Friends Progress" />
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
