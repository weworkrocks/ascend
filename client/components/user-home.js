import React from 'react'
import PropTypes from 'prop-types'
import PersonalAnalysis from './analysis components/personal-analysis'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, userId} = props
  console.log('userId ===>', userId)
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <PersonalAnalysis userId={userId} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    userId: state.user.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
