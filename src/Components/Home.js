import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home = () =>{
  return (
    <div>
      <h1>Welcome to Rock, Paper, Scissors - FIGHT!</h1>
      <br></br>
      <Link to='/round_one'><Button size='massive' color='olive'>Play the Game!</Button></Link>
    </div>
  )
}

export default Home
