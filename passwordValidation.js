var passInput = document.getElementById('passInput');
var eightChar = document.getElementById('eightChar');
var lowerCase = document.getElementById('lowerCase');
var upperCase = document.getElementById('upperCase');
var containsNumber = document.getElementById('containsNumber');
var specialChar = document.getElementById('specialChar');

passInput.onkeyup = function() {
  var userPass = passInput.value;

  var lowerCasePattern = /[a-z]/g;
  if (userPass.match(lowerCasePattern)) {
    lowerCase.classList.add('valid');
    lowerCase.classList.remove('invalid');
  } else {
    lowerCase.classList.remove('valid');
    lowerCase.classList.add('invalid');
  

  var upperCasePattern = /[A-Z]/g;
  if (userPass.match(upperCasePattern)) {
    upperCase.classList.add('valid');
    upperCase.classList.remove('invalid');
  } else {
    upperCase.classList.remove('valid');
    upperCase.classList.add('invalid');
  }

  var numberPattern = /[0-9]/g;
  if (userPass.match(numberPattern)) {
    containsNumber.classList.add('valid');
    containsNumber.classList.remove('invalid');
  } else {
    containsNumber.classList.remove('valid');
    containsNumber.classList.add('invalid');
  }
  if (userPass.length >= 8) {
    eightChar.classList.add('valid');
    eightChar.classList.remove('invalid');
  } else {
    eightChar.classList.remove('valid');
    eightChar.classList.add('invalid');
  }

  var specialCharPattern = /[@!#$%^&*(),.?":{}|<>_-]/g;
  if (userPass.match(specialCharPattern)) {
    specialChar.classList.add('valid');
    specialChar.classList.remove('invalid');
  } else {
    specialChar.classList.remove('valid');
    specialChar.classList.add('invalid');
  }
};
}