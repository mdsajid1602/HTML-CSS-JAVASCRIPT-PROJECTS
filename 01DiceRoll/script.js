let image=["Dice-1.svg",
        "Dice-2.svg",
        "Dice-3.svg",
        "Dice-4.svg",
        "Dice-5.svg",
        "Dice-6.svg",
]
let dice=document.querySelectorAll('img');
function RollDice(){
  dice.forEach(function(e){
    e.classList.add('roll')
  });
  setTimeout(function(){
      dice.forEach(function(e){
     e.classList.remove('roll');   
      });
      let dice1val=Math.floor(Math.random()*6);
      let dice2val=Math.floor(Math.random()*6);
      console.log(dice1val,dice2val);
      document.querySelector('#dice-1').setAttribute('src',image[dice1val]);
      document.querySelector('#dice-2').setAttribute('src',image[dice2val]);

      if(dice1val>dice2val){
        document.querySelector('#win').innerHTML='Players 1 Won';
      }else if(dice1val<dice2val){
        document.querySelector('#win').innerHTML='Players 2 Won';
      }else{
        document.querySelector('#win').innerHTML='Mathc Tie';
      }
      
      document.querySelector('#total').innerHTML='Your Score is ' + ((dice1val+1)+(dice2val+1));

  },500);
}

RollDice();