var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');

function checkPassword() {
    var pass1Value = pass1.value;  
    var pass2Value = pass2.value;  
    console.log(pass1Value, pass2Value); 
    var message = document.getElementById("message");

    if (pass1Value.length < 8) {
        alert("Password length should be greater than 8");
        return;
    }

    if (pass1Value.length != 0) {
       
        if (pass1Value == pass2Value) {
            message.textContent = "Password Matched";
            message.style.backgroundColor = "#3ae374";
        } else {
            message.textContent = "Password not Matched";
            message.style.backgroundColor = "#ff4d4d";
        }

    } else {
        alert("Password can't be empty");
        message.textContent = "";
    }
}


var passInput = document.getElementById('pass1');
var eightChar = document.getElementById('eightChar');
var lowerCase = document.getElementById('lowerCase');
var upperCase = document.getElementById('upperCase');
var containsNumber = document.getElementById('containsNumber');
var specialChar = document.getElementById('specialChar');

passInput.onkeyup = function() {
  var userPass = passInput.value;

  // Lowercase letters
  var lowerCasePattern = /[a-z]/g;
  if (userPass.match(lowerCasePattern)) {
    lowerCase.classList.add('valid');
    lowerCase.classList.remove('invalid');
  } else {
    lowerCase.classList.remove('valid');
    lowerCase.classList.add('invalid');
  }

  // Uppercase letters
  var upperCasePattern = /[A-Z]/g;
  if (userPass.match(upperCasePattern)) {
    upperCase.classList.add('valid');
    upperCase.classList.remove('invalid');
  } else {
    upperCase.classList.remove('valid');
    upperCase.classList.add('invalid');
  }

  // Numbers
  var numberPattern = /[0-9]/g;
  if (userPass.match(numberPattern)) {
    containsNumber.classList.add('valid');
    containsNumber.classList.remove('invalid');
  } else {
    containsNumber.classList.remove('valid');
    containsNumber.classList.add('invalid');
  }

  // Length check for 8 characters
  if (userPass.length >= 8) {
    eightChar.classList.add('valid');
    eightChar.classList.remove('invalid');
  } else {
    eightChar.classList.remove('valid');
    eightChar.classList.add('invalid');
  }

  // Special characters
  var specialCharPattern = /[@!#$%^&*(),.?":{}|<>_-]/g;
  if (userPass.match(specialCharPattern)) {
    specialChar.classList.add('valid');
    specialChar.classList.remove('invalid');
  } else {
    specialChar.classList.remove('valid');
    specialChar.classList.add('invalid');
  }
};
