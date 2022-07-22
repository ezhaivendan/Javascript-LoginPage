function displayvalue(){
    var formInputs = document.getElementsByClassName('form-inputs'); var isValid = true;
    for(i=0; i<formInputs.length; i++){
        if(formInputs[i].value.length == 0) {
            isValid = false;
            break;
        }
    }
	

	if(isValid){

		var checkpwd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/; 
		if(document.getElementById("pwd").value.match(checkpwd))  

		{  
			if(document.getElementById("pwd").value === document.getElementById("confirmpwd").value) {

			    document.getElementsByClassName('display')[0].style.display ="block";
				var fstname = document.getElementById("firstname").value;
				var lstname = document.getElementById("lastname").value;
				var mail = document.getElementById("email").value;
				document.getElementById('name').innerHTML= fstname + lstname;
				document.getElementById('mail').innerHTML= mail; 
			}
			else {
				alert('Password are mismatching, Please enter correctly.');
			} 
		}  

		else  
		{   
			alert('Please enter min 8 charactes, Note: Min one Uppercase, Numbers, Special charactes are required.')  
			return false;  
		}  

	}

	else {
		alert('Please fill the empty fields');
	}
}
