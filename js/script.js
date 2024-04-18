const euroAlKm = 0.21;
const discSenior = 60/100;
const discJunior = 80/100;
let discTicket;

const mybtn = document.getElementById('addData');

mybtn.addEventListener('click', function () {
    alert('bravo');
    let km = document.getElementById("km").value;
    console.log(km);
    let age = document.getElementById("age").value;
    console.log(age);
    let price = km * euroAlKm;
    
    if (age < 18) {
        discTicket = price * discJunior;
        console.log(discTicket);
        console.log('sconto 20');
    } else if (age >= 65) {
        discTicket = price * discSenior;
        console.log(discTicket);
        console.log('sconto 40');
    }
    console.log(price);
    console.log('sconto 0');
})