const myArray = [
	    {"fname":"Tom","lname":"Brown","address":"down the road","city":"Spanish Town",
	    "parish":"Claredon","phone":["876-445-1455","876-455-6451"],"status":"active"},
		
		{"fname":"Tom","lname":"Brown","address":"down the road","city":"Spanish Town",
	    "parish":"Claredon","phone":["876-445-1455","876-455-6451"],"status":"active"},

	    {"fname":"Mary","lname":"Brown","address":"down the road","city":"Spanish Town",
	    "parish":"Claredon","phone":["876-445-1455","876-455-6451"],"status":"active"},
	]
		

const  searchquery = document.getElementById('searchbox');

	
searchquery.addEventListener("keyup",(event) => {
	let username = event.target.value.toLowerCase();
	let search_item = document.getElementsByClassName('data');
	
	
	for(let index = 0; index < search_item.length; index++)
	{
		const currentName = search_item[index].textContent.toLowerCase();
		if(currentName.includes(username))
		{
			search_item[index].style.display = "block";
		}
		else{
			search_item[index].style.display = "none";
		}	
}

})

		
		
			var table = document.getElementById('results')
			for (var i = 0; i < myArray.length; i++){
			let data = myArray[i];
			var row = `<li>${data.fname}</li>
							<li class = "data">${data.lname}</li>
							<li class = "data">${data.address}</li>
							<li class = "data">${data.city}</li>
							<li class = "data">${data.parish}</li>
							<li class = "data">Digi:${data.phone[0]} Lime: ${data.phone[1]}</li>
						
							<li class = "data"> ${data.status}</li>

				`
			table.innerHTML += row;

		}
		
		

		
	

	
