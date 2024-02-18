function removeHiddenTicket(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function addBgInButton(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]', 'text-white');
}

