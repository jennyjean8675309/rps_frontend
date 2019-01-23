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
const SET_COMBINED_DECK = 'SET_COMBINED_DECK'
const ROUND_TWO_COMPUTER_DEAL = 'ROUND_TWO_COMPUTER_DEAL'
const ROUND_TWO_PLAYER_DEAL = 'ROUND_TWO_PLAYER_DEAL'
const ADD_SOLDIER_OR_UPGRADE_TO_PLAYERS_HAND = 'ADD_SOLDIER_OR_UPGRADE_TO_PLAYERS_HAND'
const REMOVE_SOLDIER_FROM_PLAYERS_SECOND_DEAL = 'REMOVE_SOLDIER_FROM_PLAYERS_SECOND_DEAL'
const COMPUTER_SELECTS_UPGRADES = 'COMPUTER_SELECTS_UPGRADES'
const PLAYER_DEPLOY_ARMY = 'PLAYER_DEPLOY_ARMY'
const COMPUTER_DEPLOY_ARMY = 'COMPUTER_DEPLOY_ARMY'
const SET_PLAYERS_SCORE = 'SET_PLAYERS_SCORE'
const SET_PLAYERS_ARMY = 'SET_PLAYERS_ARMY'
const SET_COMPUTERS_SCORE = 'SET_COMPUTERS_SCORE'
const SET_COMPUTERS_ARMY = 'SET_COMPUTERS_ARMY'
const SET_PLAYERS_FINAL_SCORE = 'SET_PLAYERS_FINAL_SCORE'
const SET_COMPUTERS_FINAL_SCORE = 'SET_COMPUTERS_FINAL_SCORE'
const LOGOUT = 'LOGOUT'
const UPDATE_USER = 'UPDATE_USER'

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

const setCombinedDeck = (combinedDeck) =>{
  return { type: SET_COMBINED_DECK, combinedDeck: combinedDeck }
}

const roundTwoComputerDeal = (combinedDeck) =>{
  return { type: ROUND_TWO_COMPUTER_DEAL, combinedDeck: combinedDeck }
}

const roundTwoPlayerDeal = (combinedDeck) =>{
  return { type: ROUND_TWO_PLAYER_DEAL, combinedDeck: combinedDeck }
}

const addSoldierOrUpgradeToPlayersHand =
(card) =>{
  return { type: ADD_SOLDIER_OR_UPGRADE_TO_PLAYERS_HAND, card: card }
}

const removeSoldierFromPlayersSecondDeal = (selectedCard) =>{
  return { type: REMOVE_SOLDIER_FROM_PLAYERS_SECOND_DEAL, selectedCard: selectedCard }
}

const computerSelectsUpgrades = (computersSecondDeal, computersHand) =>{
  return { type: COMPUTER_SELECTS_UPGRADES, computersDeal: computersSecondDeal, computersHand: computersHand }
}

const playerDeployArmy = (selectedArmy) =>{
  return { type: PLAYER_DEPLOY_ARMY, selectedArmy: selectedArmy }
}

const computerDeployArmy = (selectedArmy) =>{
  return { type: COMPUTER_DEPLOY_ARMY, selectedArmy: selectedArmy }
}

const setPlayersScore = (playersScore) =>{
  return { type: SET_PLAYERS_SCORE, playersScore: playersScore }
}

const setPlayersArmy = (playersArmy) =>{
  return { type: SET_PLAYERS_ARMY, playersArmy: playersArmy }
}

const setComputersScore = (computersScore) =>{
  return { type: SET_COMPUTERS_SCORE, computersScore: computersScore }
}

const setComputersArmy = (computersArmy) =>{
  return { type: SET_COMPUTERS_ARMY, computersArmy: computersArmy }
}

const setPlayersFinalScore = (bonusPoints) =>{
  return { type: SET_PLAYERS_FINAL_SCORE, bonusPoints: bonusPoints }
}

const setComputersFinalScore = (bonusPoints) =>{
  return { type: SET_COMPUTERS_FINAL_SCORE, bonusPoints: bonusPoints }
}

const logoutUser = () =>{
  return { type: LOGOUT }
}

const updateUser = (user) =>{
  return { type: UPDATE_USER, updatedUser: user }
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
      if (data.error) {
        alert(`${data.error}`)
      } else {
      let user = data.user
      console.log(user)
      dispatch(addUser(user))
      dispatch(setCurrentUser(user))}
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

const updateUserStats = (updatedStats, userId) =>{
  console.log('updated stats sent to back end...', updatedStats)
  let token = localStorage.getItem('token')
  return (dispatch) =>{
    fetch(`${USERS_URL}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authentication": `Bearer ${token}`
      },
      body: JSON.stringify(updatedStats)
    })
    .then(response => response.json())
    .then(data => {
      dispatch(setCurrentUser(data))
      dispatch(updateUser(data))
    })
  }
}

export { setSoldiers, postingLogin, postingNewUser, fetchingToken, fetchingSoldiers, fetchingSoldierUpgrades, fetchingUsers, roundOneComputerDeal, roundOnePlayerDeal, addSoldierToPlayersHand, removeSoldierFromPlayersFirstDeal, computerSelectsSoldiers, setCombinedDeck, roundTwoComputerDeal, roundTwoPlayerDeal, addSoldierOrUpgradeToPlayersHand, removeSoldierFromPlayersSecondDeal, computerSelectsUpgrades, playerDeployArmy, computerDeployArmy, setPlayersScore, setPlayersArmy, setComputersScore, setComputersArmy, setPlayersFinalScore, setComputersFinalScore, logoutUser, updateUserStats };
