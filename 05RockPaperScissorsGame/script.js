const buttons=document.querySelectorAll('button');
const results=document.getElementById('result');
const userScore=document.getElementById('userScore');
const CompScore=document.getElementById('ComputerScore');

let playerScore=0;
let computerSocre=0;

buttons.forEach(button =>{
  button.addEventListener('click',()=>{
    const result=playRound(button.id,computerPlay());
    results.textContent=result
  });
});

function computerPlay(){
  const choices=['rock','paper','scissors'];
  const randonChoice=Math.floor(Math.random()*3);
  return choices[randonChoice];
}

function playRound(playerSelect,ComputerSelect){
   if(playerSelect === ComputerSelect){
    return 'Match tie';
   }
   
   else if(
    (playerSelect ==='rock' && ComputerSelect ==='scissors') || (playerSelect === 'paper' && ComputerSelect === 'rock') || (playerSelect ==='scissors' && ComputerSelect === 'paper')
  ){
    playerScore++;
    userScore.innerHTML=playerScore;
    return 'You Won ' + playerSelect + ' beats ' + ComputerSelect;
  }
  
  else{
    computerSocre++;
    CompScore.innerHTML=computerSocre;
    return 'You lose - ' + ComputerSelect + ' beats ' + playerSelect;
   }
}