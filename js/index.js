function seatChoiceA1() {
    removeHiddenTicket('A1');
    addBgInButton('buA1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
//   calculateTicketPrice ('ticket-pice');
  SumTicketPrice();
}
function seatChoiceA2() {
    removeHiddenTicket('A2');
    addBgInButton('buA2')
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    // calculateTicketPrice ('ticket-pice');
    SumTicketPrice();
}
function seatChoiceA3() {
    removeHiddenTicket('A3');
    addBgInButton('buA3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    // calculateTicketPrice ('ticket-pice');
    SumTicketPrice();
}
function seatChoiceA4() {
    removeHiddenTicket('A4');
    addBgInButton('buA4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    // calculateTicketPrice ('ticket-pice');
    SumTicketPrice();
}
function seatChoiceB1() {
    removeHiddenTicket('B1');
    addBgInButton('buB1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    // calculateTicketPrice ('ticket-pice');
    SumTicketPrice();
}
function seatChoiceB2() {
    removeHiddenTicket('B2');
    addBgInButton('buB2');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    // calculateTicketPrice ('ticket-pice');
    SumTicketPrice();
}
function seatChoiceB3() {
    removeHiddenTicket('B3');
    addBgInButton('buB3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    // calculateTicketPrice ('ticket-pice');
    SumTicketPrice();
}
function seatChoiceB4() {
    removeHiddenTicket('B4');
    addBgInButton('buB4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    // calculateTicketPrice ('ticket-pice');
    SumTicketPrice();
}

function successSectionOn(){
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
    let ticketPush = ticketPriceArray.push =parseFloat(document.getElementById('ticket-pice').innerText);
    console.log(ticketPush);
    const totalBuyTicket = document.getElementById('seat-add').innerText;
    
    let newPrice = ticketPush * totalBuyTicket
    // let newArray  = ticketPriceArray.concat(ticketPush);
    console.log(newPrice)

    const displayPriceText = document.getElementById('total-price');
   displayPriceText.innerText = newPrice;
}



//   function calculateTicketPrice (){
//     const ticketPriceText = document.getElementById('ticket-pice');
//     const ticketPriceNumber = ticketPriceText.innerText;
//     const ticketPrice= parseFloat(ticketPriceNumber);
//     return ticketPrice
    
//   }