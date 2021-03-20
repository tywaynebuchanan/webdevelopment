
let html = document.getElementById('root');
html.innerHTML = `<div class="intro">
<h1>Learn how to make <strong>the best BBQ ribs</strong> in town</h1>
<p>Join us for this live webinar</p>
<p class="top-text">Mouthwateringly delicious</p>
</div>

<div class="main-content">
<h2>Become a BBQ master! </h2>
<p>Register Today</p>
<p>BBQ isn't just standing in front of your grill with it on full blast and hoping for the best. It's an art! One way to speed up the process is to learn from the best. You can do just that by signing up for this free webinar!</p>

<form id = "form-main" class="email-collector" action="#" method="POST">
    <input name = "fname" type="text" placeholder="first name">
    <input name = "email" type="email" placeholder="email">
    <button class="btn btn-primary" type="submit">Register</button>
</form>

<p class="fine-print">We'll never share your information without your permission</p>
</div>`
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