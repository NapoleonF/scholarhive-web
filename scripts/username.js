document.getElementById('btn-update').addEventListener('click', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstname').value.trim();
    const profileImageInput = document.getElementById('profilePictureInput');
    const profileImageFile = profileImageInput.files[0];

    if (firstName) {
        document.getElementById('dashboardUsername').textContent = firstName;
    } 
    if (profileImageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('dashboardProfileImage').src = e.target.result;
        }
        reader.readAsDataURL(profileImageFile);
    }    
});

function loadProfileImage(event) {
    const profileImage = document.getElementById('profileImage');
    profileImage.src = URL.createObjectURL(event.target.files[0]);
    profileImage.onload = function() {
        URL.revokeObjectURL(profileImage.src); // Free up memory
    }
}
const bttn = document.getElementById('btn-update');
bttn.addEventListener('click', function() {
    const notification = document.createElement('div');
    notification.textContent = 'Profile Updated!';
    notification.style.backgroundColor = 'blue';
    notification.style.color = 'white';
    notification.style.padding = '10px';
    notification.style.position = 'fixed';
    notification.style.bottom = '40px';
    notification.style.right = '40px';
    document.body.appendChild(notification);

    setTimeout(function() {
        document.body.removeChild(notification);
    }, 1500);
});