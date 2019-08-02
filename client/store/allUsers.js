import axios from 'axios'

const initialState = {}

const GET_ALL_USERS = 'GET_ALL_USERS'

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
})

export const getAllUsersThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('api/users')
    dispatch(getAllUsers(data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case GET_ALL_USERS:
      newState = action.users
      return newState
    default:
      return state
  }
}
