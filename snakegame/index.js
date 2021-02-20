const grid = document.querySelector('.grid');
const startbtn = document.getElementById('resetbtn');
const playerscore = document.getElementById('playerscore');
const gameover = document.querySelector('.gameover');
let squares = [];
let currentSnake = [2,1,0];
const maxlength = 10;
let direction = 1;
let ran_apples = 0;
let score = 0;
let intervalTime = 500;
let speed = 0.9;
let timerId = 0;

function createGrid(){

	for(let i = 0; i < 100; i++)
	{
		//Create grid
		const square = document.createElement('div');
		square.classList.add('square');
		grid.appendChild(square);
		squares.push(square);
	}

}

createGrid();

function startgame()
{
	gameover.style.display = "none";
	currentSnake.forEach(index => squares[index].classList.remove('snake'));
	squares[ran_apples].classList.remove('apple');
	clearInterval(timerId);
	currentSnake = [2,1,0];
	score = 0;
	playerscore.textContent = score;
	direction = 1;
	intervalTime = 500;
	apples();
	currentSnake.forEach(index => squares[index].classList.add('snake'));
	timerId = setInterval(move,intervalTime);
}

currentSnake.forEach(index => squares[index].classList.add('snake'));

function move()
{
	
	 if (
        (currentSnake[0] + maxlength >= 100 && direction === maxlength) || //if snake has hit bottom
        (currentSnake[0] % maxlength === 9 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % maxlength === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - maxlength < 0 && direction === -maxlength) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    ){
    	gameover.style.display = "block";
	 	return clearInterval(timerId);
	 	
	 } 

	const tail = currentSnake.pop();
	squares[tail].classList.remove('snake');
	currentSnake.unshift(currentSnake[0]+ direction);
	squares[currentSnake[0]].classList.add('snake');

	//deal with the snake eating the apple
	if(squares[currentSnake[0]].classList.contains('apple')){
		//remove the class of apple
		squares[currentSnake[0]].classList.remove('apple');
		//grow the snake
		squares[tail].classList.add('snake');
		currentSnake.push(tail);
		apples();
		score++;
		playerscore.textContent = score;
		//increase the speed of the snake
		clearInterval(timerId)
        intervalTime = intervalTime * speed
        timerId = setInterval(move, intervalTime)


	}


}
move();

apples();


function apples(){
	do{
		ran_apples = Math.floor(Math.random() * 100);
	}while(squares[ran_apples].classList.contains('snake'))

	squares[ran_apples].classList.add('apple');
	 
	
}


function control(event){
	if(event.keyCode === 39){
		// alert('➡');
		direction = 1;
	}else if(event.keyCode === 38){
		// alert('⬆');
		direction = -maxlength;
	}else if(event.keyCode === 37){
		direction = -1;
	}else if(event.keyCode === 40){
		direction = maxlength;
	}
}

document.addEventListener('keyup',control);
startbtn.addEventListener('click',startgame);