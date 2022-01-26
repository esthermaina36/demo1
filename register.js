const form=document.getElementById('form');
const Username=document.getElementById('Username');
const Email=document.getElementById('Email');
const Password=document.getElementById('Password');
const Passwordb=document.getElementById('Passwordb');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
   const UsernameValue = Username.value.trim();
   const EmailValue = Email.value.trim();
   const PasswordValue = Password.value.trim();
   const PasswordbValue = Passwordb.value.trim();

   if(UsernameValue===''){


    setErrorFor(Username, 'Username cannot be empty');
   }
   else{
    setSuccessFor(Username);
   }
   if(Email===''){


    setErrorFor(Email, 'Email cannot be empty');
   }
   else if(!isEmail(EmailValue)){
    setErrorFor(Email, 'Email Invalid');  
   }
   else {
    setSuccessFor(Email);  
   }
   if(Password===''){
    setErrorFor(Password, 'Password cannot be empty');
   }
   else{
    setSuccessFor(Password);
   }
   if(Passwordb===''){
    setErrorFor(Passwordb, 'Passwordb cannot be empty');
   }
   else{
    setSuccessFor(Passwordb);
   }

}
function setErrorFor(input, message){
    const formControl = input.parentElement;

    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){

}
