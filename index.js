function aRound(n) {
    return Math.round((n + Number.EPSILON) * 100)
    /100;
};

function renderText(){

    const value = document.querySelector(`#value`).value

    document.querySelector(`#lengthM`).textContent = "Feet(FT) to Meters(M): " + 
    aRound(value/3.281);
    document.querySelector(`#lengthFT`).textContent = "Meters(M) to Feet(FT): " + 
    aRound(value*3.281);

    document.querySelector(`#volumeL`).textContent = "Litres(L) to Gallons(G): " +
    aRound(value / 4.546);
    document.querySelector(`#volumeG`).textContent = "Gallons(G) to Litres(L): " +
    aRound(value * 4.546);

    document.querySelector(`#weightP`).textContent = "Pounds(lbs) to Kilograms(Kgs): " +
    aRound(value / 2.205);
    document.querySelector(`#weightkg`).textContent = "Kilograms(Kgs) to Pounds(Lbs): " +
    aRound(value * 2.205);

};


renderText()
