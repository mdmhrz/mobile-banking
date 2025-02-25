document.getElementById('addmoney-btn').addEventListener('click', function(event){
    event.preventDefault();
    const balance = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(balance);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('add-amount').value;
    const addAmount = parseFloat(amount); 
    if (convertedPin === 1234) {
        document.getElementById('main-balance').innerText = mainBalance + addAmount;
    }
    else{
        alert("Please Enter Valid PIN Number")
    }

    
    
})