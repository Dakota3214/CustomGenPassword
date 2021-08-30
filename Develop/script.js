// Arrays
var lengthOfCharacters = 120;
var arrayUpperCase =  ["ABCDEFGHIJKLMNOPQRSTUVWXZY"];
var arrayLowerCase = ["abcdefghijklmnopqrstuv"];
var arraySpecialcase = ["~!@#$%^&*()-=+;:,./<>?[]|`"];
var arrayNumeric = ["0123456789"];
var btn = document.querySelector(".btn");


userAnswers = {
answerOfLength: 0,
arrayAll = "",
answerOfUppercase: false,
answerOfLowercase: false,
answerOfSpecial: false,
answerOfNumeric: false,
randomPass: "", 
};



// Assignment code here
alert("Welcome to Password Generator!"); 



function questionLength() {

var value = prompt("Choose the length of your password. (min = 8, max = 128)");

// First Question About Length
if (value >= 8 && value <= 128) {
    alert("Thank you! Your password will now have " + value + " characters.");
    // userAnswers.answerOfLength = questionLength;
  }
  else { 
    alert("That is not a valid answer. Please try again.");
    questionLength();
  }
  return value;
};

// function check() {
//   alert("yoooooooooooo");
//   alert("length of password will be " + userAnswers.answerOfLength)
// }
  
  
  
// Second Question About Uppercase
function questionUppercase() {
  var value = confirm("Would you like your password to contain uppercase letters?");
    
  if (value === true) {
    alert("Your password will consist of uppercase letters.");
    userAnswers.arrayAll = userAnswers.arrayAll.concat(arrayUpperCase);
  }
    else {
      
      alert("Your password will NOT consist of uppercase letters.");
      
    }
    return value;
};
  
// Third Question About Lowercase
function questionLowercase() {
  var value = confirm("Would you like your password to contain lowercase letters?");

  if (value === true) {
    alert("Your password will consist of lowercase letters.");
    userAnswers.arrayAll = userAnswers.arrayAll.concat(arrayLowerCase);
  }
  else {
    
    var alertFalse = alert("Your password will NOT consist of lowercase letters");
    
  }
  return value;
  // questionSpecial();
  
};

// Fourth Question About Special
function questionSpecial() {
  var value = confirm("Would you like your password to contain special characters?");
  
  if (value === true) {
    alert("Your password will consist of special characters.");
    userAnswers.arrayAll = userAnswers.arrayAll.concat(arraySpecialcase);
  }
  else {
    
    alert("Your password will NOT consist of special characters.");
    
  }
  return value;
  // questionNumeric();
  
};
// Fifth Question About Numeric
function questionNumeric() {
  var value = confirm("Would you like your password to contain numeric characters?");

  if(value === true) {
    alert("Your password will consist of numeric characters.");
    userAnswers.arrayAll = userAnswers.arrayAll.concat(arrayNumeric);
  }
  else {
    
    alert("Your password will NOT consist of numeric characters.");
    
  }
  return value;
};
function Confirmation(value) {
if (userAnswers.answerOfUppercase === false || userAnswers.answerOfLowerCase === false || userAnswers.answerOfSpecial === false || userAnswers.answerOfNumeric === false) {
  alert("You must choose at least one option in order to generate your password!");
  startUserAnswers();
}
else {
  alert("Thank you! Your password will now be generated!");
  
}

function randomPassGen(value) {

    Mathfloor(Math.random()* value);

  }
};

function startUserAnswers() {
  userAnswers.answerOfLength = questionLength();
  userAnswers.answerOfUppercase = questionUppercase();
  userAnswers.answerOfLowerCase = questionLowercase();
  userAnswers.answerOfSpecial = questionSpecial();
  userAnswers.answerOfNumeric = questionNumeric();
  Confirmation();
};

function generatePassword() {
  startUserAnswers();

  for(i = 0; i < userAnswers.answerOfLength; i++) {
    var value = randomPassGen(userAnswers.arrayAll.value);
    userAnswers.randomPass = 
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
btn.addEventListener("click", writePassword);

  



