function processPayment() {
    // Get form inputs
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Perform basic form validation
    if (!isValidCardNumber(cardNumber)) {
        alert('Invalid Card Number. Please enter a valid card number.');
        return;
    }

    if (!isValidCardHolder(cardHolder)) {
        alert('Invalid Card Holder Name. Please enter a valid name.');
        return;
    }

    if (!isValidExpiryDate(expiryDate)) {
        alert('Invalid Expiry Date. Please enter a valid date in MM/YY format.');
        return;
    }

    if (!isValidCVV(cvv)) {
        alert('Invalid CVV. Please enter a valid 3-digit CVV.');
        return;
    }

    // If all validations pass, simulate payment processing
    alert('Payment processed successfully!');
}

function isValidCardNumber(cardNumber) {
    // Check if the card number is 16 digits
    return /^\d{16}$/.test(cardNumber);
}

function isValidCardHolder(cardHolder) {
    // Check if the card holder name contains only letters and spaces
    return /^[A-Za-z\s]+$/.test(cardHolder);
}

function isValidExpiryDate(expiryDate) {
    // Check if the expiry date is in MM/YY format
    return /^\d{2}\/\d{2}$/.test(expiryDate);
}

function isValidCVV(cvv) {
    // Check if the CVV is a 3-digit number
    return /^\d{3}$/.test(cvv);
}
