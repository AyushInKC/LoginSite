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

  var isLowerCase=false;

   for(var i=0;i<userPass.length;i++){
      if(userPass[i]>='a' && userPass[i]<='z'){
        isLowerCase=true;
        break;
      } 
   }

   if(isLowerCase){
    lowerCase.classList.add('valid')
    lowerCase.classList.remove('invalid')
   }
   else{
    lowerCase.classList.add('invalid');
    lowerCase.classList.remove('valid');
   }

   var isUpperCase=false;

   for(var i=0;i<userPass.length;i++){
      if(userPass[i]>='A' && userPass[i]<='Z'){
    isUpperCase=true;
        break;
      }
   }

   if(isUpperCase){
    upperCase.classList.add('valid')
    upperCase.classList.remove('invalid')
   }
   else{
    upperCase.classList.add('invalid');
    upperCase.classList.remove('valid');
   }

  if (userPass.length >= 8) {
    eightChar.classList.add('valid');
    eightChar.classList.remove('invalid');
  } else {
    eightChar.classList.remove('valid');
    eightChar.classList.add('invalid');
  }

 var hasNum=false;

 for(var i=0;i<userPass.length;i++){
     if(userPass[i]>=0 && userPass[i]<=9){
      hasNum=true;
      break;
     }
 }

 if(hasNum){
     containsNumber.classList.add('valid')
     containsNumber.classList.remove('invalid')
 }
 else{
  containsNumber.classList.remove('valid')
     containsNumber.classList.add('invalid')
 }
  
 var specialCharacters = "!@#$%^&*()_+-=/><,.;:~`";
 var hasSpecialChar = false;
 for (var i = 0; i < userPass.length; i++) {
   if (specialCharacters.includes(userPass[i])) {
     hasSpecialChar = true;
     break;
   }
 }
 if (hasSpecialChar) {
  specialChar.classList.add('valid');
  specialChar.classList.remove('invalid');
} else {
  specialChar.classList.add('invalid');
  specialChar.classList.remove('valid');
}

}