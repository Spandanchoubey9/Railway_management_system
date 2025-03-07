// Add Train to Local Storage
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
    window.location.href = "trains.html";  // Redirect to train list
});

// Display Train List
document.addEventListener('DOMContentLoaded', function() {
    let trains = JSON.parse(localStorage.getItem('trains')) || [];
    let tableBody = document.getElementById('train-list');
    if (tableBody) {
        trains.forEach((train, index) => {
            let row = `<tr>
                <td>${train.name}</td>
                <td>${train.number}</td>
                <td>${train.departure}</td>
                <td>${train.arrival}</td>
                <td>
                    <button onclick="deleteTrain(${index})">Delete</button>
                </td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
});

// Delete Train
function deleteTrain(index) {
    let trains = JSON.parse(localStorage.getItem('trains')) || [];
    trains.splice(index, 1);
    localStorage.setItem('trains', JSON.stringify(trains));
    location.reload();
}

// Search and Filter Trains
function searchTrains() {
    let query = document.getElementById('search').value.toLowerCase();
    let rows = document.querySelectorAll('#train-list tr');
    
    rows.forEach(row => {
        let trainName = row.cells[0].textContent.toLowerCase();
        let trainNumber = row.cells[1].textContent.toLowerCase();
        row.style.display = (trainName.includes(query) || trainNumber.includes(query)) ? "" : "none";
    });
}
