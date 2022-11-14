let cashCard = document.getElementById('cashOrCard');
let ifCash = document.getElementById('ifCash');
let ifCard = document.getElementById('ifCard');
let cashSel = document.getElementById('cash')
let cardSel = document.getElementById('card')

ifCash.style.display = "none";
ifCard.style.display = "none";

function cashOrCardSel(){
    if (cashSel.checked){
        ifCash.style.display = "flex";
        ifCard.style.display = "none";
    }
    else if (cardSel.checked){
        ifCard.style.display = "block";
        ifCash.style.display = "none";
    }
}
// cashOrCardSel();

cashCard.addEventListener('click', cashOrCardSel)