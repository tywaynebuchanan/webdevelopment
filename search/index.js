const searchquery = document.getElementById('searchbox');

searchquery.addEventListener("keyup",function(event){
	let username = event.target.value.toLowerCase();
	let allNamesDomCollection = document.getElementsByClassName('name');
	for(let index = 0; index < allNamesDomCollection.length; index++)
	{
		const currentName = allNamesDomCollection[index].textContent.toLowerCase();
		if(currentName.includes(username))
		{
			allNamesDomCollection[index].style.display = "block";
		}
		else{
			allNamesDomCollection[index].style.display = "none";
		}
	}	
})

