function verifierEmail(){
	var emailInput = document.getElementById('email').value;
	const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (regexEmail.test(emailInput)) {
		alert('Le formulaire a été envoyé avec succès !')
	} else {
		alert("L'email est incorrect. Veuillez réessayer.")
	}
}