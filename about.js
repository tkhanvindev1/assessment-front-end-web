console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function getCompliment(evt){
	alert('Your picture looking outstanding!');
}

let photo = document.querySelector('img')
photo.addEventListener('mouseover', getCompliment)