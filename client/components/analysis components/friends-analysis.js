import React, {Component} from 'react'
import {
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
      selectedUsers: [],
      allUsers: []
    }
  }
  async componentDidMount() {
    await this.props.fetchAllUsers()
    const {currentUser, users} = this.props
    this.setState({
      selectedUsers: [currentUser],
      allUsers: users.map(user => {
        const {id, email} = user
        return {
          id,
          email,
          key: null,
          activated: email === currentUser
        }
      })
    })
  }

  selectUser = username => {
    let currentSelectedUsers = this.state.selectedUsers
    if (currentSelectedUsers.length === 10) {
      return 'Graph is full'
    } else if (!currentSelectedUsers.indexOf(username)) {
      return 'User already exists'
    } else {
      currentSelectedUsers.push(username)
      this.setState(currentSelectedUsers)
      return 'Success'
    }
  }

  deselectUser = username => {
    let currentSelectedUsers = this.state.selectedUsers
    let userPosition = currentSelectedUsers.indexOf(username)
    console.log('Pre-removal ----->', currentSelectedUsers)
    currentSelectedUsers.splice(userPosition, 1)
    console.log('Post-removal ----->', currentSelectedUsers)
  }

  renderFriendsButton = username => {
    return (
      <Button className="initiate-test-button" variant="success">
        {username}
      </Button>
    )
  }

  render = () => {
    const {selectedUsers, allUsers} = this.state
    if (this.props.users.length === 0 || selectedUsers.length === 0)
      return <div>Loading</div>
    const data = FriendsProgressDataParser(
      getAllClimbingHistory(),
      allUsers,
      selectedUsers
    )
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>Friends Analysis</h3>
        <ButtonToolbar className="d-flex justify-content-around">
          {allUsers.map(user => {
            const {email} = user
            return (
              <Button
                className="mx-2 my-2"
                variant={user.activated ? 'success' : 'primary'}
                key={email}
              >
                {email}
              </Button>
            )
          })}
        </ButtonToolbar>
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
