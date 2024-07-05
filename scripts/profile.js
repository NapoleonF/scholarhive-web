document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sidebar a[href="#profile"]').addEventListener('click', function(event) {
        event.preventDefault();
        showSection('profile');
    });
    const profileData = {
        description:'Value for education',
        websitelink:'https://www.mavrick.org/',
        firstname: 'Joe',
        lastname:'Doe',
        email: 'joedoe@gmail.com',
        location: 'Zurich',
        profileImage: 'img/default-profile.png',
        institution: 'Mavrick'
    };

    populateProfileForm(profileData);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.main-content section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
function loadProfileImage(event) {
    const profileImage = document.getElementById('profileImage');
    profileImage.src = URL.createObjectURL(event.target.files[0]);
}
function populateProfileForm(data) {
    document.getElementById('institution').value = data.institution;
    document.getElementById('firstname').value = data.firstname;
    document.getElementById('lastname').value = data.lastname;
    document.getElementById('websitelink').value = data.websitelink;
    document.getElementById('description').value = data.description;
    document.getElementById('email').value = data.email;
    document.getElementById('location').value = data.location;
    document.getElementById('profileImage').src = data.profileImage;
}
