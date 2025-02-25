document.getElementById('add-money-box').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('transaction').style.display = 'none';

})
document.getElementById('addmoney-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(balance);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('add-amount').value;
    const addAmount = parseFloat(amount);
    if (convertedPin === 1234) {
        if ( addAmount >0 ) {
            document.getElementById('main-balance').innerText = mainBalance + addAmount;
        }
        else {
            alert('Plese enter an amount to add.')
        }
    }
    else {
        alert("Please Enter Valid PIN Number")
    }

})