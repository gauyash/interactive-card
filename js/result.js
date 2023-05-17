
let nameEl=document.querySelector(".name");
let cardNum=document.querySelector(".cardNum");
let cardMonth=document.querySelector(".cardMonth");
let cardYear=document.querySelector(".cardYear");
let cvvNum=document.querySelector(".cvvNum");

window.addEventListener('load',()=>{
    const params = (new URL(document.location)).searchParams;
    const usernameEl=params.get('username');
    const numberEl=params.get('number');
    const monthEl=params.get('month');
    const yearEl=params.get('year');
    const cvvEl=params.get('cvv');

    nameEl.textContent=usernameEl;
    cardNum.textContent=numberEl;
    cardMonth.textContent=monthEl;
    cardYear.textContent=yearEl;
    cvvNum.textContent=cvvEl;

})