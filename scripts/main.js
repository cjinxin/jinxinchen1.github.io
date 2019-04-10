var img = document.querySelector('img');

img.onclick = function() {
	var src = img.getAttribute('src');

	if (src === 'images/web.png') {
		img.setAttribute('src', 'images/computer.png');
	} else {
		img.setAttribute('src', 'images/web.png');
	}
}

var button = document.querySelector('button');

function setUserName() {
	var name = prompt('Please enter your name.');
	localStorage.setItem('name', name);
	alert('Welcome! ' + name);
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	alert('Welcome! ' + storedName);
}

button.onclick = function() {
	setUserName();
}