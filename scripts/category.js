// Select each box manually
const addMoneyBox = document.getElementById('add-money-box');
const cashoutBox = document.getElementById('cashout-box');
const transferBox = document.getElementById('transfer-box');
const getBonusBox = document.getElementById('get-bonus');
const paybillBox = document.getElementById('paybill-box');
const transactionBox = document.getElementById('transaction-box');

// Function to remove border from all boxes
function resetBorders() {
    addMoneyBox.style.borderColor = 'lightgray';
    cashoutBox.style.borderColor = 'lightgray';
    transferBox.style.borderColor = 'lightgray';
    getBonusBox.style.borderColor = 'lightgray';
    paybillBox.style.borderColor = 'lightgray';
    transactionBox.style.borderColor = '#E5E7EB';
    addMoneyBox.style.backgroundColor = 'white';
    cashoutBox.style.backgroundColor = 'white';
    transferBox.style.backgroundColor = 'white';
    getBonusBox.style.backgroundColor = 'white';
    paybillBox.style.backgroundColor = 'white';
    transactionBox.style.backgroundColor = 'white';
}

// Event listeners for each box
addMoneyBox.addEventListener('click', function () {
    resetBorders();
    addMoneyBox.style.borderColor = 'skyblue';
    addMoneyBox.style.backgroundColor = 'rgba(135, 207, 235, 0.1)'
});

cashoutBox.addEventListener('click', function () {
    resetBorders();
    cashoutBox.style.borderColor = 'skyblue';
    cashoutBox.style.backgroundColor = 'rgba(135, 207, 235, 0.1)'
});

transferBox.addEventListener('click', function () {
    resetBorders();
    transferBox.style.borderColor = 'skyblue';
    transferBox.style.backgroundColor = 'rgba(135, 207, 235, 0.1)'
});

getBonusBox.addEventListener('click', function () {
    resetBorders();
    getBonusBox.style.borderColor = 'skyblue';
    getBonusBox.style.backgroundColor = 'rgba(135, 207, 235, 0.1)'
});

paybillBox.addEventListener('click', function () {
    resetBorders();
    paybillBox.style.borderColor = 'skyblue';
    paybillBox.style.backgroundColor = 'rgba(135, 207, 235, 0.1)'
});

transactionBox.addEventListener('click', function () {
    resetBorders();
    transactionBox.style.borderColor = 'skyblue';
    transactionBox.style.backgroundColor = 'rgba(135, 207, 235, 0.1)'
});
