function updateProfileCard() {
	var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
	var name = document.getElementById('name').value;
	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.getElementById("email").value;
	if (!regName.test(name)){
		alert('Please Enter Both your First Name and Your Last Name.');
	} else if (!regEmail.test(email)) {
		alert('Please Enter a valid email address.');
	} else {
		document.getElementById("profile-name").innerHTML=name;
		document.getElementById("profile-email").innerHTML=email;
		document.getElementById("profile-address").innerHTML=document.getElementById("address").value;
		document.getElementById("profile-city").innerHTML=document.getElementById("city").value;
		document.getElementById("profile-province").innerHTML=document.getElementById("province").value;
		document.getElementById("profile-postalcode").innerHTML=document.getElementById("postal").value;
	}

}