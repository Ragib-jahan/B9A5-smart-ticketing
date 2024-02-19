function removeHiddenTicket(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function addHiddenTicket(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function addBgInButton(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]', 'text-white');
}

function addTicketNumber(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const currentValue = parseInt(elementText);
    const newValue = currentValue + 1;
    element.innerText = newValue;
}

function countSeatsLeft(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const currentValue = parseInt(elementText);
    const newValue = currentValue - 1;
    element.innerText = newValue;
    if (newValue === -1) {
        element.innerText = newValue + 1;
    }
}


function buttonDisable(elementId) {
    document.getElementById(elementId).disabled = true;
    document.getElementById(elementId).style.backgroundColor = '#1DD100';
    document.getElementById(elementId).style.color = 'white';
}






