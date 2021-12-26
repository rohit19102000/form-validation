const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//  show input error message
function showError(input,message) {
const formContol = input.parentElement;
formContol.classList = 'form-control error';
const small = formContol.querySelector('small');
small.innerText = message;
}
//  Show success outline 
function showSuccess(input) {
    const formContol = input.parentElement;
    formContol.classList = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase);
  }
//  Event listner
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,"Username is required");
    }else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email,"email is required");
    }else if(!isValidEmail(email.value)){
        showError(email,"email is not valid");
    }else{
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password,"password is required");
    }else{
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2,"password 2 is required");
    }else{
        showSuccess(password2);
    }
});