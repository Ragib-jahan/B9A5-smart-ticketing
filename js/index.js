function seatChoiceA1() {
    removeHiddenTicket('A1');
    addBgInButton('buA1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}
function seatChoiceA2() {
    removeHiddenTicket('A2');
    addBgInButton('buA2')
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}
function seatChoiceA3() {
    removeHiddenTicket('A3');
    addBgInButton('buA3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}
function seatChoiceA4() {
    removeHiddenTicket('A4');
    addBgInButton('buA4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}
function seatChoiceB1() {
    removeHiddenTicket('B1');
    addBgInButton('buB1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}
function seatChoiceB2() {
    removeHiddenTicket('B2');
    addBgInButton('buB2');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}
function seatChoiceB3() {
    removeHiddenTicket('B3');
    addBgInButton('buB3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}
function seatChoiceB4() {
    removeHiddenTicket('B4');
    addBgInButton('buB4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
}

function successSectionOn() {
    removeHiddenTicket('success-section');
    addHiddenTicket('all-section');
    SumTicketPrice();


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

    }
}