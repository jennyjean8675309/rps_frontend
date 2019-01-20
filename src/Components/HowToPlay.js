import React from 'react';

const HowToPlay = () =>{
  return (
    <div className='instructions'>
      <h1>{'Rock, Paper, Scissors, FIGHT!'}</h1>

      <h4>{'A card-based twist on the classic game.'}</h4>

      <p>{"In Rock, Paper, Scissors, FIGHT!, The General (you) builds up to three different armies - rock, paper, and/or scissors - by collecting foot soldiers and (more highly trained) special ops soldiers. Each soldier adds points to its army, and the more points an army has, the stronger it is."}</p>

      <p>{"During the FIGHT! round, The General chooses one army to deploy against The Enemy. Bonus points are awarded to either The General or The Enemy based on which army would win in a traditional rock, paper, scissors game (i.e., if The General chooses paper, and The Enemy chooses rock, The General’s army is awarded bonus points, because paper covers rock. However, The General could still lose the game; if The Enemy's rock army has more points after the bonus is awarded, ROCK BEATS PAPER)."}</p>

      <h5>{"Unlike the traditional game, in Rock, Paper, Scissors, FIGHT! the army with the most points wins!"}</h5>

      <h4>{'Detailed Game Play'}</h4>

      <h5>{'Enlistment Phase'}</h5>

      <p>{'During the enlistment phase, the foot soldier deck (30 cards - 10 of each type) is shuffled and The General and The Enemy are dealt 7 cards each - both choose 5 cards from their deal to move onto the next round - the training phase. Foot soldiers are each worth 2 points.'}</p>

      <h5>{'Training Phase'}</h5>

      <p>{"At the beginning of the training phase, the remaining foot soldier deck (20 soldiers total) is shuffled with the special ops deck (30 special ops soldiers - 10 of each type). Special Ops soldiers are worth 3 points each. The General and The Enemy are then dealt 7 cards each from this deck and may enlist another foot soldier or collect a special ops soldier. SPECIAL OPS POINTS ARE ONLY AWARDED FOR AS MANY SPECIAL OPS SOLDIERS A PLAYER HOLDS THAT DO NOT EXCEED THEIR FOOT SOLDIER COUNT (i.e., if The General holds two scissors foot soldiers (2 points), and chooses three scissors special ops soldiers (3 points) - only two of those special ops soldier's points would count toward their final scissors score; The General's final scissors score would be 10 - 2 points per foot soldier, and 3 points per special ops up to the foot soldier count)."}</p>

      <p>{'After The General and The Enemy have chosen their additional foot soldiers and/or special ops soldiers, they then choose one army to deploy.'}</p>

      <h5>{'Fight Phase'}</h5>

      <p>{"In this phase, bonus points are awarded to either The General or The Enemy, depending on which army would win in a classic game of rock, paper, scissors. (i.e., if The General chooses to deploy scissors, and The Enemy chooses to deploy rock, The Enemy would receive 5 extra bonus points because rock crushes scissors. The General still has a chance to win the Game however; if The General's TOTAL scissors points exceeds The Enemy's total rock points.)"}</p>

      <h4>{"Anyone is welcome to play - but if you choose to create an account, your stats are saved and you may have the chance to earn a Commendation Medal and show up on the Generals' Leaderboard!"}</h4>
    </div>
  )
}

export default HowToPlay;
