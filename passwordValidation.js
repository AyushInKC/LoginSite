var passInput = document.getElementById('passInput');
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
   specialChar.classList.remove('valid');
   specialChar.classList.add('invalid');
 }
};

let eyeicon=document.getElementById('close');
let password=document.getElementById('passInput');

eyeicon.onclick=function(){
    if(password.type=="password"){
        password.type="text";
        eyeicon.src="eyesOpen.png";
    }
    else{
        password.type="password";
        eyeicon.src="eyesClose.png";
    }
}




// var emailValidity=document.querySelector('.emailValidity').value

// var email= document.getElementById('email')

// email.onkeyup=function(){
//   var emailValue=email.value;
//   const referenceEmail="@.";
//   var isValidEmail=false;
//   for(var i=0;i<email.length;i++){
//     if(referenceEmail.includes(emailValue[i])){
//    isValidEmail=true;
//    break;
//     }
//   }
//   if(isValidEmail){
//      emailValidity.classList.remove('.emailValidity');
//   }
//   else{

//   }

// }