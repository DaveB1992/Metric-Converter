const input = document.querySelector(`input`);
const lengthM = document.querySelector(`#lengthM`);
const lengthFt = document.querySelector(`#lengthFT`); 
const volumeL = document.querySelector(`#volumeL`);
const volumeG = document.querySelector(`#volumeG`);
const weightP = document.querySelector(`#weightP`);
const weightKg = document.querySelector(`#weightP`);
const length = 3.281; 
const volume = 4.546;
const mass = 2.205;



function aRound(n) {
    return Math.round((n + Number.EPSILON) * 100)
    /100;
};

function renderText(){
    const value = input.value;
    
    lengthFt.textContent = `Feet(Ft) to Meters(M):${aRound(value / length)}`;
    lengthM.textContent = `Meters(M) to Feet(Ft):${aRound(value * length)}`;

    volumeL.textContent = `Litres(L) to Gallons(G):${aRound(value / volume)}`;
    volumeG.textContent = `Gallons(G) to Litres(L):${aRound(value * volume)}`;

    weightP.textContent = `Pounds(Lbs) to Kilograms(Kgs):${aRound(value / mass)}`;
    weightKg.textContent = `Kilograms(Kg) to Pounds(Lbs):${aRound(value * mass)}`;

};


renderText()
