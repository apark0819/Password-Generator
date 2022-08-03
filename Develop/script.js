// Assignment code here
// Characters that will generate the password.
function generatePassword(){
  var numCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters =  ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  numberOfCharacters = prompt('How many characters would you like in your password?')
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return 'Please choose a numerical value between 8 and 128.';
  } else {
    alert('Your password will be ' + numberOfCharacters + ' characters long.')
  }

  getNumbers = confirm('Do you want numerical characters in your password?');
  if (getNumbers) {
    var convertLowercase = alert('Your password will contain numerical characters.');
  } else {
    alert('Your password will not contain numerical characters.')
  }

  getUppercase = confirm('Do you want uppercase characters in your password?');
  if (getUppercase) {
    var convertLowercase = alert('Your password will contain uppercase characters.');
  } else {
    alert('Your password will not contain uppercase characters.')
  }

  getLowercase = confirm('Do you want lowercase characters in your password?');
  if (getLowercase) {
    var convertLowercase = alert('Your password will contain lowercase characters.');
  } else {
    alert('Your password will not contain lowercase characters.')
  }

  getSpecial = confirm('Do you want special characters in your password?');
  if (getSpecial) {
    var convertLowercase = alert('Your password will contain special characters.');
  } else {
    alert('Your password will not contain special characters.')
  }
  
  if (getNumbers === false && getUppercase === false && getLowercase === false && getSpecial === false) {
    return 'Please choose a valid character type.'
  };

  // Concatting the characters into password

  if (getNumbers) {
    possibleCharacters = possibleCharacters.concat(numCharacters);
  }

  if (getUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }

  if (getLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  } 

  if (getSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  let finalPass = '';
  for (let i = 0; i < numberOfCharacters; i++) {
    let numberGenerator = [Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPass;

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