
$(document).ready(function(){
	var emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
	var phone = /\+{0,1}[48]{0,1}\d{9,10}/
	var onlyLettersAndSpaces = /[a-ząćśńółęźżĄĘŹŻĆ \.]{0,30}/i
	var lettersSpacesNumbersAndHashes = /[a-ząćśńółęźżĄĘŹŻĆ \.0-9\/]{0,30}/i
	var postalCode = /[0-9\- ]{6,8}/

	var emailFlag, phoneFlag, nameFlag, surnameFlag, streetFlag, cityFlag, postalCodeFlag, addressFlag, shippingFlag ;

	


})