// Assignment code here

//Variables
var confirmLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecialCharacters;


//Arrays Referenced (missing ", [, ],  as specialCharacters options due to syntax)
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",","-",".","/",":",";","<",">","=","?","@","|","_","^","~"];

//Main Function
function generatePassword() {
  //Confirm Length
  var confirmLength = (prompt("Please enter how many characters you would like your password to have (8-120)"));

  //Error Message if confirmLength is outside the parameter (8-120) & Loops Back to initial confirmLength prompt. **Can't get 8 or 120 as acceptable values**
  while(confirmLength <=8 || confirmLength >=120){
    alert("Error: Please Enter a Password Length between 8 and 120.");
    var confirmLength = (prompt("How many characters will your password have? (8-120)"));
  }

  //Confirmation/Length
 alert('The length of your password will be ' + confirmLength + ' characters long');

  //Confirm Lowercase, Uppercase, Numeric, and/or Special Characters
  var confirmLowercase = confirm("Include Lowercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
  var confirmUppercase = confirm("Include Uppercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
  var confirmNumeric = confirm("Include Numbers? Select 'OK' for yes, 'CANCEL' for no.");
  var confirmSpecialCharacters = confirm("Include Special Characters? Select 'OK' for yes, 'CANCEL' for no.");

    //Error Message if None Selected & Loops Back to var confirmLowercase = confirm(...)
    while(confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmNumeric === false) {
      alert("Give me something work with here... Please select at least one option.");
      var confirmLowercase = confirm("Include Lowercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
      var confirmUppercase = confirm("Include Uppercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
      var confirmNumeric = confirm("Include Numbers? Select 'OK' for yes, 'CANCEL' for no.");
      var confirmSpecialCharacters = confirm("Include Special Characters? Select 'OK' for yes, 'CANCEL' for no.")
    }


}

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
