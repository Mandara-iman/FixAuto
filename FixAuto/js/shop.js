document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the selected shop details from local storage
    const selectedShop = JSON.parse(localStorage.getItem('selectedShop'));

    // Populate the shop details on the page
    if (selectedShop) {
        document.getElementById('shop-name').innerText = selectedShop.name;
        document.getElementById('shop-image').src = selectedShop.image;
        document.getElementById('shop-rating').innerText = `Rating: ${selectedShop.Rating.toLocaleString()}`;
        document.getElementById('shop-description').innerHTML = `About: <br/>${selectedShop.description || 'No description available.'}`;
        document.getElementById('shop-location').innerHTML = `Location: <br/>${selectedShop.nature.Location.join(', ')}`;

        // Check if 'services' property exists and is an array
        if (selectedShop.services && Array.isArray(selectedShop.services)) {
            document.getElementById('service-list').innerHTML = `Services: <br/>${selectedShop.services.join('<br/>')}`;
        } else {
            document.getElementById('service-list').innerText = 'No services available.';
        }
    } else {
        // Handle the case where no shop is selected
        alert('No shop details available.');
        
        window.location.href = '/index.htm';
    }
});
