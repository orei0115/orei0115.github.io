function updateProfileCard() {
	document.getElementById("profile-name").innerHTML=document.getElementById("name").value;
	document.getElementById("profile-email").innerHTML=document.getElementById("email").value;
	document.getElementById("profile-address").innerHTML=document.getElementById("address").value;
	document.getElementById("profile-city").innerHTML=document.getElementById("city").value;
	document.getElementById("profile-province").innerHTML=document.getElementById("province").value;
	document.getElementById("profile-postalcode").innerHTML=document.getElementById("postal").value;
}