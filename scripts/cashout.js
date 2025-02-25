document.getElementById('cashout-box').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transaction').style.display = 'none';
})

document.getElementById('cashout-btn').addEventListener('click', function(){
    const balance = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(balance);
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('cashout-amount').value;
    const cashoutAmount = parseFloat(amount);
    if (convertedPin === 1234) {
        if ( cashoutAmount >0 ) {
            if(cashoutAmount < mainBalance){
                document.getElementById('main-balance').innerText = mainBalance - cashoutAmount;
            }
            else{
                alert("Your don't have sufficient balance.")
            }
        }
        else {
            alert('Plese enter an amount to add.')
        }
    }
    else {
        alert("Please Enter Valid PIN Number")
    }
})