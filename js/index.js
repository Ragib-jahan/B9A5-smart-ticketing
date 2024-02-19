function seatChoiceA1() {
    removeHiddenTicket('A1');
    addBgInButton('buA1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buA1')
}
function seatChoiceA2() {
    removeHiddenTicket('A2');
    addBgInButton('buA2')
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buA2')
}
function seatChoiceA3() {
    removeHiddenTicket('A3');
    addBgInButton('buA3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buA3')
}
function seatChoiceA4() {
    removeHiddenTicket('A4');
    addBgInButton('buA4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buA4')
}
function seatChoiceB1() {
    removeHiddenTicket('B1');
    addBgInButton('buB1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buB1')
}
function seatChoiceB2() {
    removeHiddenTicket('B2');
    addBgInButton('buB2');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buB2')
}
function seatChoiceB3() {
    removeHiddenTicket('B3');
    addBgInButton('buB3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buB3')
}
function seatChoiceB4() {
    removeHiddenTicket('B4');
    addBgInButton('buB4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('buB4')
}

function successSectionOn() {
    removeHiddenTicket('success-section');
    addHiddenTicket('all-section');
    SumTicketPrice();
}

function goBackHomePage() {
    addHiddenTicket('success-section');
    removeHiddenTicket('all-section');
}


function goTicketSection() {
    window.scrollBy(0, window.innerWidth);
    SumTicketPrice();
}

function SumTicketPrice() {
    let ticketPriceArray = [];
    let ticketPush = ticketPriceArray.push = parseFloat(document.getElementById('ticket-pice').innerText);
    console.log(ticketPush);
    const totalBuyTicket = document.getElementById('seat-add').innerText;

    let newPrice = ticketPush * totalBuyTicket
    console.log(newPrice)

    const displayPriceText = document.getElementById('total-price');
    displayPriceText.innerText = newPrice;
    const displayGrandPriceText = document.getElementById('grand-price');
    displayGrandPriceText.innerText = newPrice;
}

function discount() {
    const inputText = document.getElementById('discount-input').value

    if (inputText === 'NEW15') {
        let ticketPriceArray = [];
        let ticketPush = ticketPriceArray.push = parseFloat(document.getElementById('ticket-pice').innerText);
        const totalBuyTicket = document.getElementById('seat-add').innerText;
        let newPrice = ticketPush * totalBuyTicket
        const displayPriceText = document.getElementById('total-price');
        displayPriceText.innerText = newPrice;
        const grandPriceDiscount = newPrice * 0.15;
        const grandPrice = newPrice - grandPriceDiscount;
        const displayGrandPriceText = document.getElementById('grand-price');
        displayGrandPriceText.innerText = grandPrice;
        addHiddenTicket('discount-input')
        addHiddenTicket('apply-button')

    }
    else if (inputText === 'Couple 20') {
        let ticketPriceArray = [];
        let ticketPush = ticketPriceArray.push = parseFloat(document.getElementById('ticket-pice').innerText);
        const totalBuyTicket = document.getElementById('seat-add').innerText;
        let newPrice = ticketPush * totalBuyTicket
        const displayPriceText = document.getElementById('total-price');
        displayPriceText.innerText = newPrice;
        const grandPriceDiscount = newPrice * 0.20;
        const grandPrice = newPrice - grandPriceDiscount;
        const displayGrandPriceText = document.getElementById('grand-price');
        displayGrandPriceText.innerText = grandPrice;
        addHiddenTicket('discount-input')
        addHiddenTicket('apply-button')
    }
}

let selectedSits = [];

function toggleSit(sitNumber) {
    const index = selectedSits.indexOf(sitNumber);
    if (index === -1 && selectedSits.length < 4) {
        selectedSits.push(sitNumber);
    } else if (index !== -1) {
        selectedSits.splice(index, 1);
    } else {
        alert("You can only select up to 4 sits at a time!");
    }
    updateButtons();
}

function updateButtons() {
    const buttons = document.querySelectorAll('.sit-button');
    for (const button of buttons) {
        const sitNumber = parseInt(button.textContent.split(' ')[1]);
        const isActive = selectedSits.includes(sitNumber);
        button.classList.toggle('active', isActive);
        button.disabled = selectedSits.length === 4 && !isActive;
        button.classList.toggle('disabled', selectedSits.length === 4 && !isActive);
    }
}

