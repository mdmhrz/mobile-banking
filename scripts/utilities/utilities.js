// Function for Values
function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// Function for Inner Text
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// Set Inner Text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// Function for Toggle display status
function displayStatus(id, status) {
    document.getElementById(id).style.display = status;
}

