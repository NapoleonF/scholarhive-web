document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.sidebar a[href="#users"]').addEventListener('click', function(event) {
        event.preventDefault();
        
        const users = [
            { institutionName: 'Institution 1', username: 'User1', scholarshipName: 'Scholarship 1', amount: '$1000', deadline: '2024-07-15' },
            { institutionName: 'Institution 2', username: 'User2', scholarshipName: 'Scholarship 2', amount: '$2000', deadline: '2024-08-01' }
        ];

        const userTableBody = document.querySelector('#userTable tbody');
        userTableBody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.institutionName}</td>
                <td>${user.username}</td>
                <td>${user.scholarshipName}</td>
                <td>${user.amount}</td>
                <td>${user.deadline}</td>
            `;
            userTableBody.appendChild(row);
        });

        document.querySelectorAll('.main-content section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('users').style.display = 'block';
    });
});
