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

    document.querySelector("#results").textContent = Math.floor(bmi(weight, height) * 100) / 100;
};