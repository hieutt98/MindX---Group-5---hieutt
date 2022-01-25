const form = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const bntSubmit = document.querySelector('button');

form.addEventListener('submit', function(e){
    e.preventDefault();
});

function HandleError (input,message) {
    const lastError = input.parentElement.querySelector('p');
    if(lastError){
        lastError.remove();
    }
    input.style.border = '1px solid red';
    const error = document.createElement('p');
    error.innerText = message;
    error.style.color = 'red';
    input.parentNode.appendChild(error);

    
}
function ClearError (input) {
    input.style.border = '1px solid #ccc';
    const error = input.parentNode.querySelector('p');
    if(error){
        input.parentNode.removeChild(error);
    }
}


const CheckNaN = function(input, message) {
    if (input.value === '') {
        HandleError(input, message);
        return false;
    } else {
        ClearError(input);
        return true;
    }
}


const checkEmail = (input, message) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(input.value)){
        HandleError(input, message);
        return false;
    }else{
        ClearError(input);
        return true;
    }
}

const checkPass = (input, message) =>{
    if(input.value.length < 8){
        HandleError(input, message);
        return false;
    }else{
        ClearError(input);
        return true;
    }
}

bntSubmit.onclick = () =>{
    let flag = true;
   
    
    if(!CheckNaN(inputEmail, 'Email is required')) {
        flag = false;
    }
    if(!checkEmail(inputEmail, 'Email is not valid')){
        flag = false;
    }
    if(!CheckNaN(inputPassword, 'Password is required')) {
        flag = false;
    }
    if(!checkPass(inputPassword, 'Password must be at least 8 characters')){
        flag = false;
    }
    if(flag){
        form.submit();
    }
}