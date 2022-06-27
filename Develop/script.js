// Assignment code here
//Generator functions - https://net-comber.com/charset.html

//Generates Lower-case letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

console.log(getRandomLower());

//Generates Upper-case letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

console.log(getRandomUpper());

//Generates Numeric from 0-9
function getNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};

console.log(getNumeric());

//Generates Numeric from 0-9
function getSpecialChar() {
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33)
};

console.log(getSpecialChar());

//Generates the length of the password (min 8, max 128)
function getLengthRange(inputtxt, minlength, maxlength)
{  	
   var userInput = inputtxt.value;  
   if(userInput.length >= minlength && userInput.length <= maxlength)
      {  	
        return true;  	
      }
   else
      {  	
	alert("Please input between " +minlength+ " and " +maxlength+ " characters");  		
        return false;  	
      }  
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Password Generator INFORMATION / VARIABLES */