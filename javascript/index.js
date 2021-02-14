// var javascriptGreeting = "Hello from Javascript"
// console.log(javascriptGreeting)

// var studentGreeting = "I am the student"
// console.log(studentGreeting)

// var myHeader = document.getElementById("myHeader");
// console.log(myHeader);

// myHeader.style.background = 'red';

// myHeader.style.color = 'green';

// var myTitle = document.getElementById("myTitle");
// var count = 5;

// var myButton = document.getElementById("btn");
// console.log(myButton);

// myButton.addEventListener("click",function(){

// 	count += 5;
// 	myButton.textContent = counter;
	

// })


//Diary JS Code
//

const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');


let counter = 1;
function addEntry(event){
	event.preventDefault();
	var date = new Date();
	var n = date.toLocaleTimeString();
	
	const displayEntryButton = document.createElement('button');
	const entryDiv = document.createElement('div');
	const deleteButtton = document.createElement('button');

	entryDiv.className = 'single-entry';
	entryDiv.innerText = entryTextbox.value + " " + n;
	entryDiv.style.display = 'none';
	entriesSection.appendChild(entryDiv);
	entryTextbox.value = "";
	displayEntryButton.className = 'display-entry-button';
	displayEntryButton.innerText = counter;
	entriesNav.appendChild(displayEntryButton);
	

	displayEntryButton.addEventListener('click', function(){
		const allEntries = document.querySelectorAll('.single-entry');

		for (let index = 0; index < allEntries.length; index++){
			allEntries[index].style.display = 'none';
		}
		entryDiv.style.display = "block";
	})
	counter++;
}

entryForm.addEventListener('submit',addEntry)


