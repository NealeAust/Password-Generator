// Assignment code here


function generatePassword(){
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var symbols = [" ", "!",  "#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ']', '^', '_', "`", "{", "|", "}", "~"];
  var chosen = [];

  var characters = [...lowerCaseLetters, ...upperCaseLetters, ...numbers, ...symbols,]
}

function generatePassword (length, characters) {
  var password = "";
  chosen.length = min="8" max="128";
  for (let i = 0; i < length; i++) {
  password += characters.charAt(
  var index =  Math.floor(Math.random() * characters.length);
  chosen.push(characters[index]);
  
  }
  
  result.innerText = chosen.join;
  return password.join ('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

