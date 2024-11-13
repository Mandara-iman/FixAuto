document.addEventListener('DOMContentLoaded', function () {
    const serviceSelect = document.getElementById('service');
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Select a service';
    serviceSelect.add(defaultOption);

    // Retrieve the selected shop details from local storage
    const selectedShop = JSON.parse(localStorage.getItem('selectedShop'));

    // Check if selectedShop is not null and has services
    if (selectedShop && selectedShop.services && Array.isArray(selectedShop.services)) {
        // Iterate through services and add options to the dropdown
        selectedShop.services.forEach(service => {
            const option = document.createElement('option');
            option.text = service;
            serviceSelect.add(option);
        });
    } else {
        // Log an error if services cannot be fetched
        console.error('Error: Unable to fetch services for the selected shop.');
    }
});

document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const selectedService = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    // Perform further actions (client-side only)
    console.log('Booking details:', { name, email, phone, selectedService, date, time, message });

    // Redirect to payment.html using anchor tag
    window.location.href = '/payment.html';
});
