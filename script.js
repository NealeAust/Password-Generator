// Assignment code here

// Declare variables


var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", ']', '^', '_', "`", "{", "|", "}", "~"];

// 'Refresh' page will clear screen if generating another password
// Commence the generate random password process
function generatePassword() {

  var choices = []

  //Prompt user to enter criteria for password and
  //Display error message if selection criteria not met
  var length = window.prompt('Enter password length between 8 and 128 characters!\n          **Increase to strengthen password**');
  var number = parseInt(length);

  if (number >= 8 && number <= 128) {

    var chartype1 = window.confirm('To include lower case letters select OK.\n **Select multiple options to strengthen password**');
    var chartype2 = window.confirm('To include upper case letters select OK.');
    var chartype3 = window.confirm('To include numbers select OK.');
    var chartype4 = window.confirm('To include symbols select OK.');

  } else {

    window.alert('Password must be between 8 and 128 characters.')
    clear();
  }


  if (chartype1 === false && chartype2 === false && chartype3 === false && chartype4 === false) {

    window.alert('Must select at least one character type.');
    clear();
  }

  //Merge character types based on selection by users
  //Creates a single selection list from which program randomly chooses characters for password
  if (chartype1 === true) {
    choices = choices.concat(lowerCaseLetters);
  }
  if (chartype2 === true) {
    choices = choices.concat(upperCaseLetters);
  }
  if (chartype3 === true) {
    choices = choices.concat(numbers);
  }
  if (chartype4 === true) {
    choices = choices.concat(symbols);

    console.log(choices);
  }
  
  // Selects required number of characters from selection list created above
  // Formulates and returns a password based on criteria provided by user
var password = "";
  for (let i = 0; i < number; i++) {
     var index = Math.floor(Math.random() * choices.length);
     password += choices[index];

  }

  return password;
//console.log(password);

}

// Display password on screen

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






