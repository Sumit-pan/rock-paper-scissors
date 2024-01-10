const choices=['rock','paper','scissors']

const computerChoices=()=>{
    let randomIndex = Math.floor(Math.random()*3)
    return choices[randomIndex]
}

const winner=(playerChoice, compChoice)=>{
if (playerChoice === compChoice)
return 'Its a tie'
if(
    (playerChoice === 'rock' && compChoice === 'scissors')||
    (playerChoice === 'paper' && compChoice === 'rock')||
    (playerChoice === 'scissors' && compChoice === 'paper')
)
{
    return 'You win!'
} else{
    return 'You Lose!'
}
}

const makeChoice=(playerChoice)=>{
    const compChoice = computerChoices();
    const result= winner(playerChoice, compChoice)

    document.getElementById('result').innerHTML = `You chose ${playerChoice}. Computer chose ${compChoice}. ${result}`
}