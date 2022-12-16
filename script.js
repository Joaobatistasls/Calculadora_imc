// Eventos
document.querySelector('#calcImc').addEventListener('click', imcCalculation);
document.querySelector('#clearImc').addEventListener('click', imcClear);

// Functions
function imcCalculation() {
    let weightInput = document.querySelector('#Weight').value;
    let heightInput = document.querySelector('#height').value / 100;
    
    let imcSum = Math.round(weightInput / heightInput ** 2);

    if(imcSum < 18.5) {
        document.querySelector('#infotext').innerHTML = `Seu IMC é ${imcSum} e sua classificação é MAGREZA.`
    } else if(imcSum >= 18.5 && imcSum < 24.9) {
        document.querySelector('#infotext').innerHTML = `Seu IMC é ${imcSum} e sua classificação é NORMAL.`
    } else if(imcSum >= 25 && imcSum < 29.9) {
        document.querySelector('#infotext').innerHTML = `Seu IMC é ${imcSum} e sua classificação é SOBREPESO.`
    } else if(imcSum >= 30 && imcSum < 34.9) {
        document.querySelector('#infotext').innerHTML = `Seu IMC é ${imcSum} e sua classificação é OBESIDADE DE GRAU 1.`
    } else if(imcSum >= 35 && imcSum < 39.9) {   
        document.querySelector('#infotext').innerHTML = `Seu IMC é ${imcSum} e sua classificação é OBESIDADE DE GRAU 2.`
    } else if(imcSum >= 40) {
        document.querySelector('#infotext').innerHTML = `Seu IMC é ${imcSum} e sua classificação é OBESIDADE DE GRAU 3.`
    };
};

function imcClear() {
    let weightInput = document.querySelector('#Weight').value;
    let heightInput = document.querySelector('#height').value;
    let imcSum = Math.round(weightInput / heightInput ** 2);

    imcSum.innerHTML = '';

    document.querySelector('#infotext').innerHTML = '';
}

