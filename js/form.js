var logInLink = document.getElementById("loginlink"),
    signUpLink = document.getElementById("signuplink"),
    signUpForm = document.getElementById("signupform"),
    logInForm = document.getElementById("loginform"),
    closeLogIn = document.getElementById("close"),
    closeSignUp = document.getElementById("close1");

logInLink.onclick = function(){
    'use strick';
    logInForm.classList.add('active');
}

signUpLink.onclick = function(){
    'use strick';
    signUpForm.classList.add('active');
}

closeLogIn.onclick = function(){
    'use strick';
    logInForm.classList.remove('active');
}
closeSignUp.onclick = function(){
    'use strick';
    signUpForm.classList.remove('active');
}