const LOGIN_URL = 'http://localhost:3000/api/v1/login'
const NEW_ACCOUNT_URL = 'http://localhost:3000/api/v1/users'
const PROFILE_URL = 'http://localhost:3000/api/v1/profile'
const SOLDIERS_URL = 'http://localhost:3000/api/v1/soldiers'
const SOLDIER_UPGRADES_URL = 'http://localhost:3000/api/v1/soldier_upgrades'
const USERS_URL = 'http://localhost:3000/api/v1/users'


//Action variables
const SET_SOLDIERS = 'SET_SOLDIERS'
const SET_SOLDIER_UPGRADES = 'SET_SOLDIER_UPGRADES'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SHOW_LOGIN = 'SHOW_LOGIN'
const ADD_USER = 'ADD_USER'
const ROUND_ONE_COMPUTER_DEAL = 'ROUND_ONE_COMPUTER_DEAL'
const ROUND_ONE_PLAYER_DEAL = 'ROUND_ONE_PLAYER_DEAL'
const ADD_SOLDIER_TO_PLAYERS_HAND = 'ADD_SOLDIER_TO_PLAYERS_HAND'
const REMOVE_SOLDIER_FROM_PLAYERS_FIRST_DEAL = 'REMOVE_SOLDIER_FROM_PLAYERS_FIRST_DEAL'
const COMPUTER_SELECTS_SOLDIERS = 'COMPUTER_SELECTS_SOLDIERS'
const REDUCE_SOLDIER_DECK_AFTER_ROUND = 'REDUCE_SOLDIER_DECK_AFTER_ROUND'
const COMBINE_SOLDIER_AND_UPGRADE_DECK = 'COMBINE_SOLDIER_AND_UPGRADE_DECK'
const ROUND_TWO_COMPUTER_DEAL = 'ROUND_TWO_COMPUTER_DEAL'

const setSoldiers = (soldierData) =>{
  return { type: SET_SOLDIERS, soldiers: soldierData };
}

const setSoldierUpgrades = (soldierUpgradeData) =>{
  return { type: SET_SOLDIER_UPGRADES, upgrades: soldierUpgradeData };
}

const setUserData = (userData) =>{
  return { type: SET_USER_DATA, users: userData };
}

const setCurrentUser = (userObj) =>{
  return { type: SET_CURRENT_USER, user: userObj };
}

const showLogin = (boolean) =>{
  return { type: SHOW_LOGIN, boolean: boolean };
}

const addUser = (newUser) =>{
  return { type: ADD_USER, user: newUser };
}

const roundOneComputerDeal = (shuffledSoldiers) =>{
  return { type: ROUND_ONE_COMPUTER_DEAL, shuffledSoldiers: shuffledSoldiers }
}

const roundOnePlayerDeal = (shuffledSoldiers) =>{
  return { type: ROUND_ONE_PLAYER_DEAL, shuffledSoldiers: shuffledSoldiers }
}

const addSoldierToPlayersHand = (selectedSoldier) =>{
  return { type: ADD_SOLDIER_TO_PLAYERS_HAND, selectedSoldier: selectedSoldier }
}

const removeSoldierFromPlayersFirstDeal = (selectedSoldier) =>{
  return { type: REMOVE_SOLDIER_FROM_PLAYERS_FIRST_DEAL, selectedSoldier: selectedSoldier }
}

const computerSelectsSoldiers = (computersDeal) =>{
  return { type: COMPUTER_SELECTS_SOLDIERS, computersDeal: computersDeal }
}

const reduceSoldierDeckAfterRound = (playersHand, computersHand) =>{
  return { type: REDUCE_SOLDIER_DECK_AFTER_ROUND, playersHand: playersHand, computersHand: computersHand }
}

const combineSoldierAndUpgradeDeck = (soldiers, upgrades) =>{
  return { type: COMBINE_SOLDIER_AND_UPGRADE_DECK, soldiers: soldiers, upgrades: upgrades }
}

const roundTwoComputerDeal = (combinedDeck) =>{
  return { type: ROUND_TWO_COMPUTER_DEAL, combinedDeck: combinedDeck }
}

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
  .then(data => {
    if (data.error) {
      alert('Incorrect username/password combination')
    } else {
      let user = data.user_info
      dispatch(setCurrentUser(user))
      localStorage.setItem('token', data.token)
      dispatch(showLogin(false))
    }
  });
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
    .then(data => {
      let user = data.user
      console.log(user)
      dispatch(addUser(user))
      dispatch(setCurrentUser(user))
      //need to add this new user to the store in the users' array and set them up as the current user
    })
  }
}

const fetchingToken = () =>{
  let token = localStorage.getItem('token')
  if (token){
    return (dispatch) =>{
    fetch(PROFILE_URL, {
      method: "GET",
      headers: {
        "Authentication": `Bearer ${token}`
      }
    }).then(response => response.json())
    .then(data => {
      let user = data.user
      dispatch(setCurrentUser(user))
      dispatch(showLogin(false))
    })
  }} else {
    return (dispatch) =>{
    dispatch(showLogin(true))}
  }
}

const fetchingSoldiers = () =>{
  return (dispatch) =>{
    fetch(SOLDIERS_URL)
      .then(response => response.json())
      .then(soldierData =>{
        dispatch(setSoldiers(soldierData))
      })
  }
}

const fetchingSoldierUpgrades = () =>{
  return (dispatch) =>{
    fetch(SOLDIER_UPGRADES_URL)
      .then(response => response.json())
      .then(soldierUpgradeData =>{
        dispatch(setSoldierUpgrades(soldierUpgradeData))
      })
  }
}

const fetchingUsers = () =>{
  return (dispatch) =>{
    fetch(USERS_URL)
      .then(response => response.json())
      .then(userData =>{
        dispatch(setUserData(userData))
      })
  }
}

export { setSoldiers, postingLogin, postingNewUser, fetchingToken, fetchingSoldiers, fetchingSoldierUpgrades, fetchingUsers, roundOneComputerDeal, roundOnePlayerDeal, addSoldierToPlayersHand, removeSoldierFromPlayersFirstDeal, computerSelectsSoldiers, reduceSoldierDeckAfterRound, combineSoldierAndUpgradeDeck, roundTwoComputerDeal };
