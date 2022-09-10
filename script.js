let player1score=0
let player2score=0
let player1turn=true

const player1ScoreBoard=document.getElementById("player1scoreboard")
const player2ScoreBoard=document.getElementById("player2scoreboard")
const player1Dice=document.getElementById("player1dice")
const player2Dice=document.getElementById("player2dice")
const message=document.getElementById("message")
const rollBtn=document.getElementById("rollBtn")
const resetBtn=document.getElementById("resetBtn")

rollBtn.addEventListener("click", function(){
    const randomNumber =Math.floor(Math.random()*6)+1
    
    if(player1turn){
        player1score+=randomNumber
        player1ScoreBoard.textContent=player1score
        player1Dice.textContent=randomNumber
        message.textContent="player 2 turn"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
    }
    else {
        player2score+=randomNumber
        player2ScoreBoard.textContent=player2score
        player2Dice.textContent=randomNumber
        message.textContent="player 1 turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
    }
    
    if(player1score >= 20){
        message.textContent = "player 1 has won"
        show();
    } else if (player2score >= 20){
        message.textContent = "player 2 has won"
        show();   
    }
    player1turn = !player1turn
})

resetBtn.addEventListener("click",function(){
    reset()
})

function reset(){
    let player1score=0
    let player2score=0
    let player1turn=true
    player1ScoreBoard.textContent=player1score
    player1Dice.textContent= "-"
    player2ScoreBoard.textContent=player1score
    player2Dice.textContent= "-"
    message.textContent="player 1 turn"
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
    resetBtn.style.display="none"
    rollBtn.style.display="block"
}

function show(){
    resetBtn.style.display="block"
    rollBtn.style.display="none"
}