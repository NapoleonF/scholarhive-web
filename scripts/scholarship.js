document.getElementById('scholarshipForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const scholarshipName = document.getElementById('scholarshipName').value;
    const scholarshipAmount = document.getElementById('scholarshipAmount').value;
    const scholarshipDeadline = document.getElementById('scholarshipDeadline').value;

    if (scholarshipName.trim() === '' || scholarshipAmount.trim() === '' || scholarshipDeadline.trim() === '') {
       
        alert('Please fill in all required fields:Scholarship Name, Amount, and Deadline');
        return;
    }

    if (document.getElementById('scholarshipForm').dataset.editing === 'true') {
        const editingIndex = document.getElementById('scholarshipForm').dataset.index;
        const scholarshipRow = document.getElementById('scholarshipTable').rows[editingIndex];
       
        scholarshipRow.cells[0].textContent = scholarshipName;
        scholarshipRow.cells[1].textContent = `$${scholarshipAmount}`;
        scholarshipRow.cells[2].textContent = scholarshipDeadline;

        document.getElementById('scholarshipForm').dataset.editing = 'false';
        document.getElementById('scholarshipForm').dataset.index = '';
    } else {
        const scholarshipTable = document.getElementById('scholarshipTable').getElementsByTagName('tbody')[0];
        const newRow = scholarshipTable.insertRow();
        
        newRow.insertCell(0).textContent = scholarshipName;
        newRow.insertCell(1).textContent = `$${scholarshipAmount}`;
        newRow.insertCell(2).textContent = scholarshipDeadline;
        const actionsCell = newRow.insertCell(3);
        actionsCell.innerHTML = `
            <div class="table-actions">
                <button class="edit" onclick="editScholarship(this)">Edit</button>
                <button class="delete" onclick="deleteScholarship(this)">Delete</button>
            </div>
        `;
    }

    updateScholarshipCount();

    document.getElementById('scholarshipForm').reset();

    hideForm('addScholarshipForm');
});

function showForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function hideForm(formId) {
    document.getElementById(formId).style.display = 'none';
    document.getElementById('scholarshipForm').reset();
    document.getElementById('scholarshipForm').dataset.editing = 'false';
    document.getElementById('scholarshipForm').dataset.index = '';
}

function updateScholarshipCount() {
    const totalScholarships = document.getElementById('scholarshipTable').getElementsByTagName('tbody')[0].rows.length;
    document.getElementById('totalScholarships').textContent = totalScholarships;
    document.getElementById('activeScholarships').textContent = totalScholarships;
}

function editScholarship(button) {
    const row = button.parentNode.parentNode.parentNode;
    const cells = row.cells;

   
    const scholarshipName = cells[0].textContent;
    const scholarshipAmount = cells[1].textContent.replace('$', '');
    const scholarshipDeadline = cells[2].textContent;

    
    document.getElementById('scholarshipName').value = scholarshipName;
    document.getElementById('scholarshipAmount').value = scholarshipAmount;
    document.getElementById('scholarshipDeadline').value = scholarshipDeadline;

    showForm('addScholarshipForm');

    document.getElementById('scholarshipForm').dataset.editing = 'true';
    document.getElementById('scholarshipForm').dataset.index = row.rowIndex;
}

function deleteScholarship(button) {
    const row = button.parentNode.parentNode.parentNode;
    row.remove();
    updateScholarshipCount();
}
document.addEventListener('DOMContentLoaded', function() {
    const scholarships = [];

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.main-content section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    document.querySelector('.sidebar a[href="#scholarships"]').addEventListener('click', function(event) {
        event.preventDefault();
        showSection('scholarships');
        populateScholarshipTable();
    });

    function populateScholarshipTable() {
        const tbody = document.getElementById('scholarshipTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; 
        scholarships.forEach(scholarship => {
            const row = tbody.insertRow();
           
            row.insertCell(0).textContent = scholarship.scholarshipName;
           
            row.insertCell(1).textContent = scholarship.amount;
            row.insertCell(2).textContent = scholarship.deadline;
        });
    }
    document.getElementById('addScholarshipButton').addEventListener('click', function() {
        document.getElementById('addScholarshipForm').style.display = 'block';
    });
    document.getElementById('scholarshipForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const newScholarship = {
           
            scholarshipName: document.getElementById('scholarshipName').value,
            amount: document.getElementById('scholarshipAmount').value,
            deadline: document.getElementById('scholarshipDeadline').value
        };
        scholarships.push(newScholarship);
        document.getElementById('addScholarshipForm').style.display = 'none';
        document.getElementById('scholarshipForm').reset();
    });
});
const submitBtn = document.getElementById('scholar');
submitBtn.addEventListener('click', function() {
    const notification = document.createElement('div');
    notification.textContent = 'Scholarship added successfully!';
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