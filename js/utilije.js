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

// function calculateTicketPrice(elementId) {
//     const ticketPriceText = document.getElementById(elementId);
//     const ticketPriceNumber = ticketPriceText.innerText;
//     const ticketPrice = parseFloat(ticketPriceNumber);
//     return ticketPrice

// }



