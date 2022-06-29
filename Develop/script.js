// Assignment code here

var emptyArray = [];

function userPrompts() {
  var passwordLength = parseInt(
    prompt(
      "Please select the length of your password between (8 and 128 characters)"
    )
  );

  if (passwordLength > 128 || passwordLength < 8) {
    window.alert("Please select a valid number between 8 and 128");
    userPrompts();
  }
  

  if (isNaN(passwordLength)) {
    window.alert('Please select a valid "NUMBER" ');
    userPrompts();
  }

  console.log("This is Password's length: ", passwordLength);

  //Confirm value true or false
  var confirmLower = confirm("do you want lower case?");
  var confirmUpper = confirm("do you want upper case?");
  var confirmNumeric = confirm("do you want numbers?");
  var confirmSymbol = confirm("do you want symbols?");

  const randomFunc = {
    lower: confirmLower,
    upper: confirmUpper,
    number: confirmNumeric,
    symbol: confirmSymbol,
    pl: passwordLength,
  };

  console.log(randomFunc);

  return randomFunc;
}

// Generates Lower-case letters
function generatePassword() {
  var passwordOptions = userPrompts();
   var password = "";

  if (passwordOptions.lower) {
    var wantLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    // We are taking the lower case letters and adding it to the empty array
    emptyArray = emptyArray + "abcdefghijklmnopqrstuvwxyz";
  }
  console.log(wantLower, "This is a random whatever lol");

//Generates Upper-case letters
if (passwordOptions.upper) {
  var wantUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // We are taking the lower case letters and adding it to the empty array
  emptyArray = emptyArray + "ABCDEFGHIJKLMNOPQRSTUVWQYZ";
}
console.log(wantUpper, "This is a random whatever lol");

//Generates Numeric from 0-9
if (passwordOptions.number) {
  var wantNumber = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // We are taking the lower case letters and adding it to the empty array
  emptyArray = emptyArray + "0123456789";
}
console.log(wantNumber, "This is a random whatever lol");

//Generates Symbol
if (passwordOptions.symbol) {
  var wantSymbol = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // We are taking the lower case letters and adding it to the empty array
  emptyArray = emptyArray + "!@#$%^&*(){}=<>/,.";
}
console.log(wantSymbol, "This is a random whatever lol");

for (var i = 0; i < passwordOptions.pl; i++) {
  password = password + emptyArray[Math.floor(Math.random() * emptyArray.length)];
  console.log(password, "Message this is it");
}

return password;


//Generates the length of the password (min 8, max 128)
function getLengthRange(inputtxt, minlength, maxlength) {
  var userInput = inputtxt.value;
  if (userInput.length >= minlength && userInput.length <= maxlength) {
    return true;
  } else {
    alert(
      "Please input between " + minlength + " and " + maxlength + " characters"
    );
    return false;
  }
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
