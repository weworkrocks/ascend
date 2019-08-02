import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllUsersThunk} from '../../store'

class FriendsAnalysis extends Component {
  async componentDidMount() {
    await this.props.fetchAllUsers()
  }

  render() {
    const users = this.props.users
      ? this.props.users.map(user => {
          const {id, email} = user
          return {
            id,
            email,
            key: null
          }
        })
      : []
    console.log(users)
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
