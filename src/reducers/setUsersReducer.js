export const setUsersReducer = (state = [], action) =>{
  switch (action.type) {
    case 'SET_USER_DATA':
      return [...state, ...action.users]
    case 'ADD_USER':
      return [...state, action.user]
    case 'UPDATE_USER':
      let currentUsers = [...state].filter(user => user.id !== action.updatedUser.id)
      return [...currentUsers, action.updatedUser]
    default:
      return state
  }
}
