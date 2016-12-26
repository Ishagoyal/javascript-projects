
	var state= new Array();
	var country=new Array();
	
	state[0]="";
	state[1]="Rajasthan";
	state[2]="Maharashtra";
	state[3]="Karnataka";
	state[4]="Maharashtra";

	country[0]="";
	country[1]="India";
	country[2]="India";
	country[3]="India";
	country[4]="India";


	function userStateAndCountry(){

		x=document.getElementById("userCityOptions");
		document.getElementById("userState").value=state[x.selectedIndex];
		document.getElementById("userCountry").value=country[x.selectedIndex];
	
	}

	function validateForm(){
		
		for(var i=3; i<6;i++){
 		boxElement=document.ContactForm.elements[i];
		if(!boxElement.value){
			alert('You have not filled the ' +boxElement.name+ '!');
			boxElement.focus();
			
		}
		
	   }

		characterInput=document.ContactForm.name.value;
		var characterInputFormat=/^([a-zA-Z]+\s)*[a-zA-Z]+$/;
		if(!characterInput.value.match(characterInputFormat)){
			alert('Please fill characters only');
			characterInput.focus();
			
		}


		var emailId= document.ContactForm.Email.value;
		var atpos = emailId.indexOf("@");
   		var dotpos = emailId.lastIndexOf(".");
    		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        	alert("Not a valid e-mail address");
        	

		}


	    return true;
       
	}