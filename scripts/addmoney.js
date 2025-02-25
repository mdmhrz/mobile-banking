document.getElementById('add-money-box').addEventListener('click', function () {
    displayStatus('add-money-section', 'block')
    displayStatus('cashout-section', 'none')
    displayStatus('transaction', 'none')

})
document.getElementById('addmoney-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mainBalance = getInnerTextByID('main-balance');
    const pin = getInputValueByID('pin');
    const addAmount = getInputValueByID('add-amount');
    const historyContainer = document.getElementById('all-history');
    const bankName = document.getElementById('banks-name').value;
    const addmoneyNumber = document.getElementById('addmoney-mobile-number').value;
    if (addmoneyNumber.length !== 11) {
        alert('Please enter a valid number')
        return
    }

    if (pin === 1234) {
        if (addAmount > 0) {
            // document.getElementById('main-balance').innerText = mainBalance + addAmount;
            const value = mainBalance + addAmount;
            setInnerText('main-balance', value);

            // Update History to Transactiom Section
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
                <div class="flex items-center justify-between px-4 py-3 bg-white mt-3 rounded-md border border-gray-300 shadow-md">
                    <div class="flex gap-3 items-center">
                        <div class="bg-gray-200 p-2 rounded-full">
                            <img src="./media/wallet.png" alt="">
                        </div>
                        <div>
                            <h4 class="font-bold text-[12px]">Added $${addAmount} from ${addmoneyNumber} number through ${bankName}</h4>
                            <span class="text-gray-500 text-[12px]">Today 01:44 AM</span>
                        </div>
                    </div>
                    <i class="fas fa-ellipsis-v text-gray-400"></i>
                </div>
            `
            historyContainer.appendChild(newHistory)
        }
        else {
            alert('Plese enter an amount to add.')
        }
    }
    else {
        alert("Please Enter Valid PIN Number")
    }

})