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


//Set current time
function currentTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `Today ${hours} : ${minutes} ${ampm} `
}