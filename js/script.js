// =====================================
// BURBUJAS ANIMADAS
// =====================================

for(let i=0; i<35; i++){

    const burbuja = document.createElement("div");

    burbuja.classList.add("burbuja");

    const size = Math.random() * 60 + 20;

    burbuja.style.width = size + "px";
    burbuja.style.height = size + "px";

    burbuja.style.left = Math.random() * 100 + "vw";

    burbuja.style.animationDuration =
    (Math.random() * 10 + 8) + "s";

    burbuja.style.animationDelay =
    Math.random() * 5 + "s";

    document.body.appendChild(burbuja);
}

// =====================================
// FECHA DEL EVENTO
// =====================================

// FORMATO:
// AÑO-MES-DÍA T HORA:MINUTO:SEGUNDO
const fechaEvento = new Date("2026-05-10T00:00:00");

// =====================================
// CONTADOR
// =====================================

function actualizarContador(){

    // FECHA ACTUAL REAL
    const hoy = new Date();

    // DIFERENCIA
    const diferencia = fechaEvento - hoy;

    // SI YA PASÓ
    if(diferencia <= 0){

        document.querySelector(".contador").innerHTML =
        "<h2>🎉 ¡Hoy es el cumpleaños! 🎂</h2>";

        return;
    }

    // DÍAS
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    // HORAS
    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    // MINUTOS
    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    // SEGUNDOS
    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    // MOSTRAR EN HTML
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

// EJECUTAR AL CARGAR
actualizarContador();

// ACTUALIZAR CADA SEGUNDO
setInterval(actualizarContador, 1000);