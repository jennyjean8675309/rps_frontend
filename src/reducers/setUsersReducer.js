export const setUsersReducer = (state = [], action) =>{
  switch (action.type) {
    case 'SET_USER_DATA':
      return [...state, ...action.users]
    case 'ADD_USER':
      return [...state, action.user]
    default:
      return state
  }
}
