document.getElementById('signUpButton').addEventListener('click', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const confirmpassword = document.getElementById('confirm-password').value;
    const location = document.getElementById('location').value

    
    if (firstname === '') {
        alert('Please enter your First Name.');
        return;
    }
    if (lastname === '') {
        alert('Please enter your Last Name.');
        return;
    }
    if (email === '') {
        alert('Email is required.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (location === '') {
        alert('Please enter your location.');
        return;
    }

    if (location === '') {
        alert('location is required.');
        return;

    }
    if (password === '') {
        alert('Password is required.');
        return;
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a unique character.');
        return;
    }
    if (confirmpassword === '') {
        alert('Please enter to confirm your Password.');
        return;
    }
    if (password !== confirmpassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }
   
    window.location.href = 'nextpg.html';
});
