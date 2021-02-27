let formMain = document.getElementById('form-main');

formMain.addEventListener("submit", event => {

event.preventDefault();
let formData = new FormData(event.target);

let firstName = formData.get("fname");
let emailAddress = formData.get("email");

let congrats = `<h2>Congrations ${firstName} </h2>
<p>We will send you an email confirming the date and time. The email address is: ${emailAddress}</p>
<p>You are on your way to become a MMA Star</p>`

let MainContent = document.querySelector('.main-content');
MainContent.innerHTML = congrats;
    
})