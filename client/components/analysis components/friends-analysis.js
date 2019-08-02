import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllUsersThunk} from '../../store'

class FriendsAnalysis extends Component {
  async componentDidMount() {
    await this.props.fetchAllUsers()
  }

  render() {
    console.log(this.props.users)
    return <div>HELLO FRIENDS</div>
  }
}

const mapStateToProps = state => ({
  users: state.allUsers
})

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(getAllUsersThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsAnalysis)
