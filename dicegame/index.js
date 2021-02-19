//Create variables for the game states

let player1 = {score:0,totalscore:0,player1turn:true};
let player2 = {score:0,totalscore:0};
const winning = 20;

//getting dom elements

player1.score = document.getElementById('player1Scoreboard');
player2.score = document.getElementById('player2Scoreboard');
const message = document.getElementById('message');
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const roleDice = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

function SwitchBtn(btn1,btn2){
	btn1.style.display = "none";
	btn2.style.display = "block";
	return btn1, btn2;
}

function reset(){
	player1.score.textContent = 0;
	player2.score.textContent = 0;
	player1.totalscore = 0;
	player2.totalscore = 0;
	player1.player1turn = true;
	message.textContent = "Player 1 Turn";
	roleDice.style.display = "block";
	resetBtn.style.display = "none";
	player1Dice.style.display = "none";
	player2Dice.style.display = "none";
	
}

const resetgame = document.getElementById('resetgame').addEventListener('click', function(){
	reset();
})

roleDice.addEventListener('click', function(){
	const dicevalue = Math.floor(Math.random() * 6) + 1; 
	
	if(player1.player1turn){
	player1Dice.style.display = "block";
	player1Dice.src =`images/dice-${dicevalue}.jpg`;
	player1.totalscore += dicevalue;
	player1.score.textContent = player1.totalscore;
	message.textContent = "Player 2 Turn";

}else{
	player2Dice.style.display = "block";
	player2Dice.src =`images/dice-${dicevalue}.jpg`;
	player2.totalscore += dicevalue;
	player2.score.textContent = player2.totalscore;
	message.textContent = "Player 1 Turn";
	
}

if(player1.totalscore >= winning){
	message.innerHTML = "You won player 1";
	SwitchBtn(roleDice,resetBtn);
	
}else if(player2.totalscore >= winning){
message.innerHTML = "You won player 2";
	SwitchBtn(roleDice,resetBtn);
}

player1.player1turn = !player1.player1turn;

})

resetBtn.addEventListener('click',function(){
	reset();

})




	
	


