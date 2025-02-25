document.getElementById('get-bonus').addEventListener('click', function () {
    displayStatus('add-money-section', 'none')
    displayStatus('cashout-section', 'none')
    displayStatus('transaction', 'none')
    displayStatus('transfer-section', 'none')
    displayStatus('paybill-section', 'none')
    displayStatus('bonus-section', 'block')
})

document.getElementById('get-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mainBalance = getInnerTextByID('main-balance');
    const cuponAmount = getInputValueByID('cupon-amount');
    const historyContainer = document.getElementById('all-history');

    if (cuponAmount > 0) {
        const value = mainBalance + cuponAmount;
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
                        <h4 class="font-bold text-[12px]">Added $${cuponAmount} through Applying Cupon</h4>
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
})

