const searchquery = document.getElementById('searchbox');
const list = document.getElementById('results');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let rows = 5; // amount of items we want to display on the page 



searchquery.addEventListener("keyup",(event) => {
	let username = event.target.value.toLowerCase();
	let allNamesDomCollection = document.querySelectorAll('.name');
		
	for(let index = 0; index < allNamesDomCollection.length; index++)
	{
		const currentName = allNamesDomCollection[index].textContent.toLowerCase();
		if(currentName.includes(username))
		{
			allNamesDomCollection[index].style.display ="inline		";
		}
		else{
			allNamesDomCollection[index].style.display = "none";
		}	
}

})

const myArray = [
	    {"fname":"Tom","lname":"Brown","address":"down the road","city":"Spanish Town",
	    "parish":"Claredon","phone":["876-445-1455","876-455-6451"],"status":"active"},
		
		{"fname":"Tom","lname":"Brown","address":"down the road","city":"Spanish Town",
	    "parish":"Claredon","phone":["876-445-1455","876-455-6451"],"status":"active"},

	    {"fname":"Mary","lname":"Brown","address":"down the road","city":"Spanish Town",
	    "parish":"Claredon","phone":["876-445-1455","876-455-6451"],"status":"active"},
	]
	
	buildTable(myArray)
	function buildTable(data){
		var table = document.getElementById('results')
		// table.innerHTML = "";
		for (var i = 0; i < data.length; i++){
			var row = `<li class = "name">${data[i].fname}</li><li class = "name">${data[i].lname}</li> 
			<li class = "name">${data[i].address}</li>
			`
			table.innerHTML += row


		}
	}


