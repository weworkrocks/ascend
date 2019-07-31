import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  console.log(props)
  return (
    <div>
      <div>
        <h2>Welcome, {email}</h2>
      </div>
      <div>
        <h3>Click Summary of Last Climb</h3>
      </div>
      <div>
        <h3>Click Summary of Something Else</h3>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
