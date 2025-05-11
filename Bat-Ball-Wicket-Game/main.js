function generateComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3 + 1 )
    
    let computer ;
    if (randomNumber == 1 ) {
         computer = 'Bat'     
    }
    else if(randomNumber == 2) {
         computer = 'Ball'        
    }
    else {
         computer = 'Wicket'  
    }

    return computer;
}


function getResultMsg(userMove, computerMove){

    if(userMove == "Bat"){
        if(computerMove == 'Ball' ){
            return 'You Win';
        }
        else if(computerMove == 'Bat'){
          return 'Tie';
        }
        else if(computerMove == 'Wicket'){
            return 'You Lose';
        }
    }
    else if( userMove == "Ball"){
        if(computerMove == 'Ball' ){
            return 'Tie';
        }
        else if(computerMove == 'Bat'){
            return 'You Lose';
        }
        else if(computerMove == 'Wicket'){
            return'You Win';
        }
    }
    else{
        if(computerMove == 'Ball' ){
            return 'You Won';
        }
        else if(computerMove == 'Bat'){
            return 'You Lose';
        }
        else if(computerMove  == 'Wicket'){
            return 'You Tie';
        }
    }

  
}


function showResult(computer , resultmsg){
    let result = document.getElementById('result');

    result.innerHTML = `You choose Bat, Computer choose ${computer} so Result is <span> ${resultmsg} </span>`
}