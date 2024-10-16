let icon = document.getElementById('eyeicon'); 
let password = document.getElementById('pass'); 

icon.onclick = function() {
  if (password.type === "password") {
    password.type = "text";
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');  
  } else {
    password.type = "password";
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye'); 
  }
};
