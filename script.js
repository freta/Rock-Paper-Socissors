function computerPlay(n){
 let randomResult= (Math.floor(Math.random() * n));
switch (randomResult){
    case 0:
     return('Rock');
     break;
    case 1:
     return('Paper');
     break;
    case 2:
     return('Scissors');  
     break;
}
}


function playRound(playerSelection, computerSelection){
// if both players pick same cards, withdraw
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Draw";
     }
// player rock , computer paper
     else if (playerSelection.toLowerCase() === 'rock'){
      return(computerSelection === 'Paper') ? 'You Lose!, paper beats rock' : 'You Win,Rock beats scissors'; 
     
    }

// player scissors, computer rock
    else if ( playerSelection.toLowerCase() === 'scissors'){
       return (computerSelection === 'Rock') ? 'You Lose, rock beats scissors': 'You Win, Scissors beat paper';
        
      }


// player paper, computer scissors
else if (playerSelection.toLowerCase() === 'paper'){
       return(computerSelection === 'Scissors') ? 'You Lose, scissors beats paper': 'You Win, paper beats rock';
        
     }
    
}




let game = ()=> {
        for (let i= 0 ; i < 5; i++){
            let numResult, playerScore = 0;
            const playerSelection = window.prompt('Lets play rock paper scissors, Enter your choice from Rock, paper, scissors ');
            const computerSelection = computerPlay(3);
            const result= playRound(playerSelection, computerSelection);
            console.log(playerSelection, computerSelection);
            if(result !== 'Draw') {
                 numResult = (result.includes('Win')) ? 'true' : 'false';
                 if(numResult === 'true'){
                    playerScore++;
                    console.log('Player is the Winner with ' + playerScore);
                 
                  }else{
                    console.log('Player is the Loser');
                }
             }
        }
}
game();