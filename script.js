// Implementar el código aqui
// Escuchar el evento 'submit'

// const imc = (weight / ((height*height)/10000))

const bmi = (weight, height) => (weight / ((height * height) / 10000));

const form = document.forms["bmi"];

form.addEventListener("submit", calculateBMI);

function calculateBMI(event) {
    event.preventDefault();

    const height = form.elements["height"].value;
    const weight = form.elements["weight"].value;

    const bmiResult = Math.floor(bmi(weight, height) * 100) / 100;

    document.querySelector("#results").textContent = bmiResult;

    addColorToBMI(bmiResult);
};

function addColorToBMI(bmiResult) {
    let color;
    let text;

    if (bmiResult < 18.6) {
        color = "firebrick";
        text = " (under)";
    } else if (bmiResult <= 24.9) {
        color = "green";
        text = " (normal)";
    } else {
        color = "firebrick";
        text = " (over)";
    }

    document.querySelector("#results").style.color = color;
    document.querySelector("#results").textContent += text;
};