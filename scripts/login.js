/*const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '') {
        alert('Email is required.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password === '') {
        alert('Password is required.');
        return;
    }
    window.location.href = 'dashboardandSiderbar.html';
});*/

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '') {
        alert('Email is required.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password === '') {
        alert('Password is required.');
        return;
    }
    window.location.href = 'dashboard.html';
});