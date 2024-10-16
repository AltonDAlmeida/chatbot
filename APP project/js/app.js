document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const formData = {
        roomType: document.getElementById('roomType').value,
        guests: document.getElementById('guests').value,
        checkIn: document.getElementById('checkIn').value,
        checkOut: document.getElementById('checkOut').value
    };

    fetch('/submit-reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the success message
        document.getElementById('formResponse').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
