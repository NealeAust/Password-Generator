// Assignment code here

// Declare variables

  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", ']', '^', '_', "`", "{", "|", "}", "~"];
  

  function generatePassword () {

  var choices = []

  var length = window.prompt('Enter password length between 8 and 128 characters:', '');
  var number = parseInt (length);
  
  if (number >= 8 && number <=128) {

  var chartype1 = window.confirm('Do you want to include lower case letters?'); 
  var chartype2 = window.confirm('Do you want to include upper case letters?'); 
  var chartype3 = window.confirm('Do you want to include numbers?'); 
  var chartype4 = window.confirm('Do you want to include symbols?');
  
  } else {
 
  window.alert('Password must be between 8 and 128 characters'); 

}
  

if  (chartype1 === false && chartype2 === false && chartype3 === false  && chartype4 === false) {
  
  window.alert('Must click on OK to choose at least one character type'); 
}
if (chartype1 === true){           
  choices =choices.concat (lowerCaseLetters);
}
 if (chartype2 === true){
  choices = choices.concat (upperCaseLetters);
}
if (chartype3 === true){
  choices = choices.concat (numbers);
 }
 if (chartype4 === true){
  choices = choices.concat (symbols);
 }

console.log(choices);


// Creating random password


  var password = "";
  for (let i = 0; i < number; i++) {
   var index = Math.floor(Math.random() * choices.length);
    password += choices[index];

  }
  return password;
  console.log(password);
 
  }


//Generate show password on screen

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to generate button

}
generateBtn.addEventListener("click", writePassword);
