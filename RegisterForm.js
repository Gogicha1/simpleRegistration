document.getElementById('register').addEventListener('click', submitForm)


function submitForm(e) {
    e.preventDefault();

    

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password1').value;


    let isValid = true;
    if (name.trim().length > 0) {
      document.getElementById('nameError').innerText = '';
    } else {
      document.getElementById('nameError').innerText = 'Name is required';
      isValid = false;
    }

    
    if (email.trim().length > 0) {
      document.getElementById('emailError').innerText = '';
    } else {
      document.getElementById('emailError').innerText = 'Email is required';
      isValid = false;
    }
   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      document.getElementById('emailError').innerText = 'Enter Valid Email';
      
    }
    
    if (password.trim().length > 0) {
      document.getElementById('passwordError').innerText = '';
    } else {
      document.getElementById('passwordError').innerText = 'Password is required';
      isValid = false;
    }
   
    if (confirmPassword.trim().length > 0) {
      document.getElementById('confirmPasswordError').innerText = '';
      
    } else{
      isValid = false;
      document.getElementById('confirmPasswordError').innerText = 'Confirm Password is required';
    }
    
    if (password !== confirmPassword) {
      isValid = false;
      document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
      
    }
   
    if (isValid){

    
    const data = { name, email, password };


    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))

      document.getElementById('form').reset();
      document.getElementById('nameError').innerText = '';
      document.getElementById('emailError').innerText = '';
      document.getElementById('passwordError').innerText = '';
      document.getElementById('confirmPasswordError').innerText = '';

  }
  
}