const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', validateForm);
   
function validateForm(event) {
    event.preventDefault();

    const email = loginFormEl.email.value;
    const password = loginFormEl.password.value;

    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені');
        return;
    }
    
    const loginFormData = {
      email,
      password,
    };

    console.log(loginFormData);

    loginFormEl.reset();
}








