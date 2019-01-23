export const setCurrentUserReducer = (state = null, action) =>{
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user
    case 'LOGOUT':
      return null
    case 'UPDATE_USER':
      return action.updatedUser
    default:
      return state
  }
}
