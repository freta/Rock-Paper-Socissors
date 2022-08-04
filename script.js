
let playerScore = 0;
let computerScore= 0;
const rock= document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors= document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const container = document.getElementById('result');






function computerPlay(){
 let randomResult= (Math.floor(Math.random() * 3));
switch (randomResult){
    case 0:
     return('rock');
     break;
    case 1:
     return('paper');
     break;
    case 2:
     return('scissors');  
     break;
}
}


function playRound(playerSelection, computerSelection){
     // if both players pick same cards, withdraw
        if (playerSelection === computerSelection){
                 return 'it\'s a Draw, Lets play again!';
         }
    // player rock , computer paper
         else if (playerSelection === 'rock' && computerSelection === 'paper'){
            computerScore++;
            return 'Computer Win, paper beats rock'; 
            
       }
    // player rock, computer scissors
        else if(playerSelection === 'rock' && computerSelection === 'scissors' ){
            playerScore++;
            return 'Player win!, Rock beats Scissors';
            
        }
    // player scissors, computer rock
        else if ( playerSelection === 'scissors' && computerSelection === 'rock' ){
            computerScore++;
             return  'Computer Win, rock beats scissors';
          
          }
    // player scissors, computer paper
        else if ( playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore++;
            return 'Player Win, scissors beats paper';
            
        }
    // player paper, computer scissors
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
           computerScore++;
           return 'Computer Win, scissors beats paper';
           
         }
    // player paper, computer rock
         else if (playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++;
            return 'Player win, paper beats rock';
                
             }
     }

let game = () => {
    playerScore =0 , computerScore =0;
         // for (let i= 0 ; i < 5; i++){
            // selecting all the three buttons
            
            [rock,paper,scissors].forEach((button) => {
                button.addEventListener('click', (e) => {
                    containDisapper(container, button.id); 
                    
                });
            });
            // console.log(playerScore,computerScore);
            //  console.log(scores());// displays the result after the five round
            
}

function containDisapper(container, sel){
    
    const playerSelection = sel;
    const computerSelection = computerPlay();
    const result= playRound(playerSelection, computerSelection);
    console.log(playerSelection,computerSelection);
    console.log( `Player selected ${playerSelection}, Computer selected ${computerSelection}`);
    console.log(result);
    const div1 = document.createElement('div');
    const selection = document.createTextNode(`Player selected ${playerSelection}, Computer selected ${computerSelection}`);
    const score = document.createTextNode(result);
   
    
    container.appendChild(div1);
    const div2 = document.createElement('div1');
   // div1.appendChild(div2);
    div1.appendChild(score);
   div2.appendChild(selection);
   //div1.remove();
   
}

    function scores(){
        if(playerScore > computerScore){
            return `Player won! Player scored : ${playerScore} and Computer scored: ${computerScore}`;
        }else if(playerScore > computerScore){
            return `Computer won! Computer scored : ${computerScore} and Player scored: ${playerScore}`;
        } else if(playerScore == computerScore) {
              return `it's a tie Computer scored : ${computerScore} and Player scored: ${playerScore}`;
      }
    }

game();


