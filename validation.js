

function submitFormNow(){
	
   	var emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	var phone = /\+{0,1}[48]{0,1}\d{9,10}/;
	var onlyLettersAndSpaces = /^[a-zZ-a]{1}[a-ząćśńółęźżĄĘŹŻĆ \.]{0,30}/i;
	var lettersSpacesNumbersAndHashes = /[a-ząćśńółęźżĄĘŹŻĆ \.0-9\/]{0,30}/i;
	var postalCode = /[0-9\- ]{6,8}/;
	
	var emailVal = $('#inputEmail').val();
	var phoneVal = $('#inputPhoneNumber').val();
	var nameVal = $('#inputName').val();
	var surnameVal = $('#inputSurame').val();
	var cityVal = $('#inputCity').val();
	var streetVal = $('#inputStreet').val();
	var postalCodeVal = $('#inputPostal').val();
	var addressVal = $('#inputLocal').val();

	var emailFlag = emailVal.match(emailReg);
	var phoneFlag = phoneVal.match(phone);
	var nameFlag = nameVal.match(onlyLettersAndSpaces);
	var surnameFlag = surnameVal.match(onlyLettersAndSpaces);
	var cityFlag = cityVal.match(onlyLettersAndSpaces);
	var streetFlag = streetVal.match(onlyLettersAndSpaces);
	var postalCodeFlag = postalCodeVal.match(postalCode);
	var addressFlag = addressVal.match(lettersSpacesNumbersAndHashes);
	var shippingFlag = function(){
		if ($('#inputShipping').val() !== ""){
			return true;
		}else {
			return false;
		}
	}

	var validationArray = [emailFlag, phoneFlag, nameFlag, surnameFlag, cityFlag, streetFlag, postalCodeFlag, addressFlag, shippingFlag];

	var positiveFlagsCounter = 0;
	for (var i = 0; 1 <= validationArray.length; i++){
		console.log(validationArray[i])
		if (validationArray[i]){
			positiveFlagsCounter += 1;
		}
	}

	console.log(positiveFlagsCounter);

	if (positiveFlagsCounter === 9){
		window.location.href = '/some/new/page';
	} else {
		alert("Uzupełnij arkusz aby przejśc dalej!")
	}


	
 }
