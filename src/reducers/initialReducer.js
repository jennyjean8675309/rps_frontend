export const initialReducer = (state = [], action) =>{
  switch (action.type) {
    case 'INITIAL_ACTION':
      return state.push('initial reducer working')
    default:
      return state
  }
}
