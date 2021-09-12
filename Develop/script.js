// Assignment code here

//Variables
var confirmLength = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecialCharacters;
var charactersUsed = [];
var finalPassword;


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
  while(confirmLength < 8 || confirmLength > 120){
    alert("Error: Please Enter a Password Length between 8 and 120.");
    var confirmLength = (prompt("How many characters will your password have? (8-120)"));
  }

  //Confirmation/Length
 alert('The Length of Your Password Will Be ' + confirmLength + ' Characters Long.');

  //Confirm Lowercase, Uppercase, Numeric, and/or Special Characters

    //Lowercase
    var confirmLowercase = confirm("Include Lowercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
    //Corresponding If/Else statements fot alerts and true/false concatenation to charactersUsed variable.
      if (confirmLowercase){
        charactersUsed = charactersUsed.concat(lowercase);
        alert('Your password will contain lowercase letters.');
      } else {
        alert('Your password will NOT contain lowercase letters.');
      };
    
    //Uppercase
    var confirmUppercase = confirm("Include Uppercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
    if (confirmUppercase){
      charactersUsed = charactersUsed.concat(uppercase);
      alert('Your password will contain uppercase letters.');
    } else {
      alert('Your password will NOT contain uppercase letters.');
    };

    //Numeric
    var confirmNumeric = confirm("Include Numbers? Select 'OK' for yes, 'CANCEL' for no.");
    if (confirmNumeric){
      charactersUsed = charactersUsed.concat(numbers);
      alert('Your password will contain numbers.');
    } else {
      alert('Your password will NOT contain numbers.');
    };

    //Special Characters
    var confirmSpecialCharacters = confirm("Include Special Characters? Select 'OK' for yes, 'CANCEL' for no.");
    if (confirmSpecialCharacters){
      charactersUsed = charactersUsed.concat(specialCharacters);
      alert('Your password will contain special characters.');
    } else {
      alert('Your password will NOT contain special characters.');
    };

      //**LOOP**: Error Message if None Selected & Loops Back to var confirmLowercase = confirm(...) Note: this can be shortened by wrapping everything in a function...
      while(confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmNumeric === false) {
        alert("Give me something work with here... Please select at least one option.");
        //Confirm Lowercase, Uppercase, Numeric, and/or Special Characters

        //Lowercase
        var confirmLowercase = confirm("Include Lowercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
        //Corresponding If/Else statements fot alerts and true/false concatenation to charactersUsed variable.
          if (confirmLowercase){
            charactersUsed = charactersUsed.concat(lowercase);
            alert('Your password will contain lowercase letters.');
          } else {
            alert('Your password will NOT contain lowercase letters.');
          };
        
        //Uppercase
        var confirmUppercase = confirm("Include Uppercase Letters? Select 'OK' for yes, 'CANCEL' for no.");
        if (confirmUppercase){
          charactersUsed = charactersUsed.concat(uppercase);
          alert('Your password will contain uppercase letters.');
        } else {
          alert('Your password will NOT contain uppercase letters.');
        };

        //Numeric
        var confirmNumeric = confirm("Include Numbers? Select 'OK' for yes, 'CANCEL' for no.");
        if (confirmNumeric){
          charactersUsed = charactersUsed.concat(numbers);
          alert('Your password will contain numbers.');
        } else {
          alert('Your password will NOT contain numbers.');
        };

        //Special Characters
        var confirmSpecialCharacters = confirm("Include Special Characters? Select 'OK' for yes, 'CANCEL' for no.");
        if (confirmSpecialCharacters){
          charactersUsed = charactersUsed.concat(specialCharacters);
          alert('Your password will contain special characters.');
        } else {
          alert('Your password will NOT contain special characters.');
        };
      }

  //Console Log for all characters used in final equation
  console.log(charactersUsed)
  
  //Placeholder string for following function
    var finalPassword = "";
      //Final equation that adds all variables together (Math.Floor added to prevent runoff length)
    for (var i = 0; i < confirmLength; i++) {
      finalPassword = charactersUsed[Math.floor(Math.random() * charactersUsed.length)] + finalPassword;
      console.log(finalPassword)
    }
    //the final product of the generatePassword function
    return finalPassword;

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
