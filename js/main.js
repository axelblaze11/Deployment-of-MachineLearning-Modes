
function getInfo() {
	var username = document.getElementById("uname").value
	var password = document.getElementById("pass").value
		if(username == 'Axel' && password == '40440Axel') {
			location.href="Details.html";
		}
		else if(username =='Antra'){
			location.href="Details.html";
		}
		else if(username =='Aman' && password =='14205'){
			location.href="Details.html";
		}
		else if(username =="" && password == "")
		{       alert("No Blank Values Allowed..!!!");
		}	
		else
		{
			alert("Wrong Username or Password Entered !! Try Again !!");
		}
}