document.getElementById('crmForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let clientName = document.getElementById('clientName').value;
    let contactPerson = document.getElementById('contactPerson').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let contactMethod = document.getElementById('contactMethod').value;
    let clientStatus = document.getElementById('clientStatus').value;
    let interestLevel = document.getElementById('interestLevel').value;
    let communicationResult = document.getElementById('communicationResult').value;
    let notes = document.getElementById('notes').value;
    let salesRep = document.getElementById('salesRep').value;
    let employeeCode = document.getElementById('employeeCode').value;
    let branch = document.getElementById('branch').value;
    let dealClosed = document.getElementById('dealClosed').value;
    let closureDate = document.getElementById('closureDate').value;
    let clientReceivedDate = document.getElementById('clientReceivedDate').value;
    let firstContactDate = document.getElementById('firstContactDate').value;

    let client = {
        id: Date.now(),
        clientName,
        contactPerson,
        contactNumber,
        contactMethod,
        clientStatus,
        interestLevel,
        communicationResult,
        notes,
        salesRep,
        employeeCode,
        branch,
        clientReceivedDate,
        firstContactDate
    };

    addClientToTable(client);
    saveClientToLocalStorage(client);
});

function addClientToTable(client) {
    let table = document.getElementById('clientList');
    let row = table.insertRow();
    row.insertCell(0).innerText = client.clientName;
    row.insertCell(1).innerText = client.contactPerson;
    row.insertCell(2).innerText = client.contactNumber;
    row.insertCell(3).innerText = client.contactMethod;
    row.insertCell(4).innerText = client.clientStatus;
    row.insertCell(5).innerText = client.interestLevel;
    row.insertCell(6).innerText = client.communicationResult;
    row.insertCell(7).innerText = client.notes;
    row.insertCell(8).innerText = client.salesRep;
    row.insertCell(9).innerText = client.employeeCode;
    row.insertCell(10).innerText = client.branch;
    row.insertCell(11).innerText = client.clientReceivedDate;
    row.insertCell(12).innerText = client.firstContactDate;
    let actions = row.insertCell(13);
    actions.innerHTML = `<button class="btn btn-danger btn-sm" onclick="deleteClient(${client.id})">حذف</button>`;
}

function saveClientToLocalStorage(client) {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));
}

function deleteClient(id) {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients = clients.filter(client => client.id !== id);
    localStorage.setItem('clients', JSON.stringify(clients));
    document.getElementById('clientList').innerHTML = '';
    clients.forEach(client => addClientToTable(client));
}

// Load clients on page load
window.onload = function() {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.forEach(client => addClientToTable(client));
};
