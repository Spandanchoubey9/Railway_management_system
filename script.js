document.getElementById('train-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let train = {
        name: document.getElementById('train-name').value,
        number: document.getElementById('train-number').value,
        departure: document.getElementById('departure').value,
        arrival: document.getElementById('arrival').value
    };
    let trains = JSON.parse(localStorage.getItem('trains')) || [];
    trains.push(train);
    localStorage.setItem('trains', JSON.stringify(trains));
    alert('Train Added!');
});

document.addEventListener('DOMContentLoaded', function() {
    let trains = JSON.parse(localStorage.getItem('trains')) || [];
    let tableBody = document.getElementById('train-list');
    if (tableBody) {
        trains.forEach(train => {
            let row = `<tr><td>${train.name}</td><td>${train.number}</td><td>${train.departure}</td><td>${train.arrival}</td></tr>`;
            tableBody.innerHTML += row;
        });
    }
});

document.getElementById('account-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    document.getElementById('saved-details').textContent = `Name: ${name}, DOB: ${dob}`;
});
