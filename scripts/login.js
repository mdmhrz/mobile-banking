document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('mobile-number').value;
    const userPin = document.getElementById('pin').value;
    const pin = parseInt(userPin);
    if (accountNumber.length === 11) {
        if(pin === 1234){
            window.location.href = 'main.html';
        }
        else{
            alert('Incorrect PIN')
        }
    }
    else{
        alert('Please enter a valid number')
    }
})