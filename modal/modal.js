const overlay = document.getElementById("overlay");
const showButton = document.getElementById("open-modal");
const hideButton = document.getElementById("close-button");

overlay.style.display = "none";

showButton.addEventListener('click', function(){

	overlay.style.display = "initial";

})

hideButton.addEventListener('click', function(){

	overlay.style.display = "none";
})

