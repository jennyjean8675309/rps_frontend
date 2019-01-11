export const showLoginReducer = (state = true, action) =>{
  switch (action.type) {
    case 'SHOW_LOGIN':
      return action.boolean
    default:
      return state
  }
}
