const LOGIN_URL = 'http://localhost:3000/api/v1/login'
const NEW_ACCOUNT_URL = 'http://localhost:3000/api/v1/users'

const INITIAL_ACTION = 'INITIAL_ACTION'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

const initialAction = () =>{
  return { type: INITIAL_ACTION };
}

const setCurrentUser = (userObj) =>{
  return { type: SET_CURRENT_USER, user: userObj.user }
}

//Here, we create an action that doesn't return an objection with a key of type, but instead returns a function (this is possible through the middleware that we installed - thunk)
const postingLogin = (user_info) =>{
  return (dispatch) =>{
  fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user_info)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  }
}

const postingNewUser = (new_user_info) =>{
  return (dispatch) =>{
    fetch(NEW_ACCOUNT_URL, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(new_user_info)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
}

export { initialAction, postingLogin, postingNewUser };
