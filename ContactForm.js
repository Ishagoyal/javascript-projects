
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
		
		for(var i=4; i<=6;i++){
 		boxElement=document.ContactForm.elements[i];
		if(!boxElement.value){
			alert('You have not filled the ' +boxElement.name+ '!');
			boxElement.focus();
      return false;
		  	
		}
		
	   }

		characterInput=document.getElementById("userFullName");
		var characterInputFormat=/^([a-zA-Z]+\s)*[a-zA-Z]+$/;
		if(!characterInput.value.match(characterInputFormat)){
			alert('Please fill characters only');
			characterInput.focus();
      return false;
			
		}

emailId= document.getElementById("userEmailId");
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
    		if (!emailId.value.match(emailFormat)) {
        	alert("Not a valid e-mail address");
      	  emailId.focus();
          return false;
		}
    
     phoneNumber= document.getElementById("userPhoneNo");
    var phoneNumberFormat = /^[0-9]+$/;
		
    		if (!phoneNumber.value.match(phoneNumberFormat)) {
        	alert("Please enter numbers only");
      	  emailId.focus();
          return false;

		}


	    return true;
       
	}