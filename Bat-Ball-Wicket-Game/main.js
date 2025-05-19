let scorebord = document.querySelector(".scrore-board")

const score = {
    win: 0,
    loss: 0,
    tie: 0,
}

function generateComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3 + 1)

    let computer;
    if (randomNumber == 1) {
        computer = 'Bat'
    }
    else if (randomNumber == 2) {
        computer = 'Ball'
    }
    else {
        computer = 'Wicket'
    }

    return computer;
}


function getResultMsg(userMove, computerMove) {

    if (userMove == "Bat") {
        if (computerMove == 'Ball') {
            console.log(score.win++)
            ;
            return 'You Win';
        }
        else if (computerMove == 'Bat') {
            score.tie++
            return 'Tie';
        }
        else if (computerMove == 'Wicket') {
            score.loss++
            return 'You Lose';
        }
    }
    else if (userMove == "Ball") {
        if (computerMove == 'Ball') {
            score.tie++
            return 'Tie';
        }
        else if (computerMove == 'Bat') {
            score.loss++
            return 'You Lose';
        }
        else if (computerMove == 'Wicket') {
            score.win++
            return 'You Win';
        }
    }
    else {
        if (computerMove == 'Ball') {
            score.win++
            return 'You Won';
        }
        else if (computerMove == 'Bat') {
            score.loss++
            return 'You Lose';
        }
        else if (computerMove == 'Wicket') {
            score.tie ++
            return 'You Tie';
        }
    }


}


function showResult(computer, resultmsg) {
    let result = document.getElementById('result');

    result.innerHTML = `You choose Bat, Computer choose ${computer} so Result is <span> ${resultmsg} </span>`
}

scorebord.innerHTML = `
<span>${score.win}</span>
<span>${score.loss}</span>
<span>${score.tie}</span>
`