// Assignment code here

// Declare variables

  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", ']', '^', '_', "`", "{", "|", "}", "~"];
  

  
  var length = window.prompt("Enter password length between 8 and 128 characters:", " ");
  var number = ParseInt(length, radix);
  
  if(number >= 8 && number <=128) {

    
  var chartype1 = window.confirm(“Do you want to include lower case letters?”);
  var chartype2 = window.confirm(“Do you want to include upper case letters?”);
  var chartype3 = window.confirm(“Do you want to include numbers?”);
  var chartype4 = window.confirm(“Do you want to include symbols”?);
  
  Else (
 
  window.alert(“Password must be between 8 and 128 characters");
   
  
 
    
if( chartype1 === true &&|| chartype2 === true &&|| chartype3 === true  &&|| chartype-4 === true); 
  
  


// Creating random password

function generatePassword () {
  prompt("Please enter a length for your password between 8 and 128");
  prompt("Please indicate if you the charcter types to include")
  alert("Length ")
  prompt("Do I want to use " + lowercaseLetters + upperCaseLetter)
  var password = "";
  for (let i = 0; i < password.length; i++) {
 
  var index= Math.floor(Math.random() * characters.length);
  result.innerText = chosen.join;
  return password.join ('');
  }
  
 
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
generateBtn.addEventListener("click", writePassword);

}
