document.getElementById('institution-form').addEventListener('submit', function(event) {
   event.preventDefault(); 

   const institution = document.getElementById('institution').value.trim();
   const description = document.getElementById('description').value.trim();
   const websitelink = document.getElementById('websitelink').value.trim();

   if (!institution || !description || !websitelink) {
       alert('Please fill in all the fields.');
       return;
   }

   window.location.href = 'dashboard.html';
});
