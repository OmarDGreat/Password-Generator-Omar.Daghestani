// Assignment code here

var emptyArray = [];


function userPrompts() {

  var passwordLength = parseInt(prompt('Please select the length of your password between (8 and 128 characters)'));

  if (passwordLength > 128 && passwordLength < 8) {

    window.alert('Please select a valid number between 8 and 128')
    
  };


  if (isNaN(passwordLength)) {

    window.alert('Please select a valid "NUMBER" ');

    return null;

  };


  console.log(passwordLength);


//
  var confirmLower = confirm('do you want lower case?')

  const randomFunc = {
    lower: confirmLower,
    upper: getRandomUpper,
    number: getRandomNumeric,
    symbol: getRandomSymbol,
    pl: passwordLength
  };

  console.log(randomFunc);

  return randomFunc;
};

//Generator functions - https://net-comber.com/charset.html

//Generates Lower-case letters
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

//Generates Lower-case letters

function generatePassword() {

  var passwordOptions = userPrompts();

  if (passwordOptions.lower) {
    var wantLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    // We are taking the lower case letters and adding it to the empty array
    emptyArray = emptyArray + 'abcdefghijklmnopqrstuvwxyz'
  }
  console.log(wantLower, 'This is a random whatever lol');


  var password = 'dfjfkdkfnk';

  for(var i=0; i < passwordOptions.pl; i++) {
    
    password = password + emptyArray[Math.floor(Math.random() * emptyArray.length)];
    console.log(password, "Message this is it");

  };

  return password;
}


//Generates Upper-case letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpper());

//Generates Numeric from 0-9
function getRandomNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomNumeric());

//Generates Symbol 
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());

//Generates the length of the password (min 8, max 128)
function getLengthRange(inputtxt, minlength, maxlength) {
  var userInput = inputtxt.value;
  if (userInput.length >= minlength && userInput.length <= maxlength) {
    return true;
  }
  else {
    alert('Please input between ' + minlength + ' and ' + maxlength + ' characters');
    return false;
  }
};


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


