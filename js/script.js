const euroAlKm = 0.21;
const discSenior = 60 / 100;
const discJunior = 80 / 100;
let discTicket;

const mybtn = document.getElementById('addData');
const mybtnDelete = document.getElementById('delete');

// mybtnDelete.addEventListener('click', function () {
//     document.getElementById('requestName').innerHTML = ' ';
//     document.getElementById('km').innerHTML = ' ';
// })


mybtn.addEventListener('click', function () {
    let km = document.getElementById("km").value;
    console.log(km);
    let ageJunior = document.getElementById("age1").checked;
    let ageAdulto = document.getElementById("age2").checked;
    let ageSenior = document.getElementById("age3").checked;
    console.log(ageJunior);
    console.log(ageAdulto);
    console.log(ageSenior);
    let price = km * euroAlKm;

    if (ageJunior) {
        discTicket = price * discJunior;
        document.getElementById('sale').innerHTML = '20%';
        document.getElementById('priceTicket').innerHTML = discTicket.toFixed(2);
        console.log(discTicket);
        console.log('sconto 20');
    } else if (ageSenior) {
        discTicket = price * discSenior;
        document.getElementById('sale').innerHTML = '40%';
        document.getElementById('priceTicket').innerHTML = discTicket.toFixed(2);
        console.log(discTicket);
        console.log('sconto 40');
    } else {
        document.getElementById('sale').innerHTML = 'Non ne hai diritto!';
        document.getElementById('priceTicket').innerHTML = price.toFixed(2);
        console.log(price);
        console.log('sconto 0');
    }

    document.getElementById('name').innerHTML = document.getElementById('requestName').value;
    document.getElementById('trainCarriage').innerHTML = Math.floor(Math.random() * 11);
    document.getElementById('iD').innerHTML = Math.floor(Math.random() * 100000 + 1);

    if (ageJunior == false && ageAdulto == false && ageSenior == false) {
        alert('Seleziona un età')
        document.getElementById('name').innerHTML = 'Null'
        document.getElementById('trainCarriage').innerHTML = 'Null'
        document.getElementById('iD').innerHTML = 'Null'
        document.getElementById('sale').innerHTML = 'Null'
        document.getElementById('priceTicket').innerHTML = 'Null'
    }
})

// MANIPOLAZIONE STYLE

// let body = document.querySelector("body");
// let container = document.querySelector('div');
// let rowContainer = document.querySelector('div > div');
// let smallContainer = document.querySelectorAll('div > div > div');

// body.className = 'bg-danger';
// container.className = 'container';
// rowContainer.className = 'row';
// smallContainer.className = 'col-4 text-center bg-light'