document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('mobile-number').value;
    const pin = getInputValueByID('pin');
    if (accountNumber.length === 11) {
        if (pin === 1234) {
            window.location.href = 'main.html';
        }
        else {
            alert('Incorrect PIN')
        }
    }
    else {
        alert('Please enter a valid number')
    }
})




