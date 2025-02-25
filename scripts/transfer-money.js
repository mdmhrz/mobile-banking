document.getElementById('transfer-box').addEventListener('click', function () {
    displayStatus('add-money-section', 'none')
    displayStatus('cashout-section', 'none')
    displayStatus('transaction', 'none')
    displayStatus('transfer-section', 'block')
})

document.getElementById('transfer-btn').addEventListener('click', function () {
    const mainBalance = getInnerTextByID('main-balance');
    const pin = getInputValueByID('cashout-pin');
    const transferAmount = getInputValueByID('transfer-amount');
    const transferNumber = document.getElementById('transfer-number').value;
    const historyContainer = document.getElementById('all-history');


    if (transferNumber.length === 11) {
        if (pin === 1234) {
            if (transferAmount > 0) {
                if (transferAmount < mainBalance) {
                    const updatedAmount = mainBalance - transferAmount;
                    setInnerText('main-balance', updatedAmount)

                    // Update History to Transactiom Section
                    const newHistory = document.createElement('div');
                    newHistory.innerHTML = `
                        <div class="flex items-center justify-between px-4 py-3 bg-white mt-3 rounded-md border border-gray-300 shadow-md">
                            <div class="flex gap-3 items-center">
                                <div class="bg-gray-200 p-2 rounded-full">
                                    <img src="./media/wallet.png" alt="">
                                </div>
                                <div>
                                    <h4 class="font-bold text-[12px]">Transfered $${transferAmount} to ${transferNumber} number</h4>
                                    <span class="text-gray-500 text-[12px]">Today 01:44 AM</span>
                                </div>
                            </div>
                            <i class="fas fa-ellipsis-v text-gray-400"></i>
                        </div>
                    `
                    historyContainer.appendChild(newHistory)
                }
                else {
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
    }
    else {
        alert('Please enter a valid mobile number')
    }


})