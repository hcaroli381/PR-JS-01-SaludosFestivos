const formulario1 = document.querySelector("#saludo");
const resultado = document.querySelector("#resultado");
let emojis = "";
formulario1.addEventListener("click", function (event) {
    event.preventDefault();
    const name1 = document.querySelector("#name").value; 
    const age = document.querySelector("#age").value;
    if (age < 18) {
        for (let i = 0; i < age; i++){
            emojis = emojis + "🥛";
        }
    } else {
        for (let i = 0; i < age; i++){
            emojis = emojis + "🍺";
        }
    }
    resultado.innerHTML = `Hola ${name1}!<br>Brindemos con ${emojis}`;
});