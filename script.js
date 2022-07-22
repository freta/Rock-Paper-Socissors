
let playerScore = 0;
let computerScore= 0;

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
            const buttons = document.querySelectorAll('button');
            buttons.forEach((button) => {
                button.addEventListener('click', e => {
                const playerSelection = button.id;
                const computerSelection = computerPlay();
                console.log(playerSelection,computerSelection);
                const result= playRound(playerSelection, computerSelection);
                console.log( `Player selected ${playerSelection}, Computer selected ${computerSelection}`);
                console.log(result);
                const node = document.getElementById('result');
                
                    const div1 = document.createElement('div');
                    const div2 = document.createElement('div');
                   // const divresult = document.createElement('div');
                    const score = document.createTextNode(result);
                    const selection = document.createTextNode(`Player selected ${playerSelection}, Computer selected ${computerSelection}`);
                    node.appendChild(div1);
                    div1.appendChild(div2);
                    div1.appendChild(score);
                    div2.appendChild(selection);
                 
                });
             });
         
            //console.log(`Round ${i+ 1} `);
            
         // }
       console.log(playerScore,computerScore);
       console.log(scores());// displays the result after the five round
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

