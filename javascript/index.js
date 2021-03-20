	let html = document.getElementById('root');
	html.innerHTML = ` <h1 class="title">My Personal Diary</h1>
	<form id="entryForm">
		<textarea class="entry-textbox" placeholder="Click here to start typing" required=""></textarea>
	  <div>
		   <button type="submit" class="button"> Submit</button> 
	  </div>
	  
	</form>
	
	<section id = "entries">
		<div class="entries-nav"></div>
	</section>`

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


