document.getElementById("btnGenerar").addEventListener("click", function () {

    let numero = document.getElementById("txtNumero").value.trim();
    let alerta = document.getElementById("alerta");
    let resultado = document.getElementById("resultado");

    // Limpiar áreas
    alerta.innerHTML = "";
    resultado.textContent = "";

    // Validación
    if (numero === "" || isNaN(numero)) {
        alerta.innerHTML = `
            <div class="alert alert-warning" role="alert">
                ⚠️ Por favor ingrese un número válido.
            </div>
        `;
        return;
    }

    numero = Number(numero);
    let i = 1;
    let tabla = "";

    // CICLO DO...WHILE
    do {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
        i++;
    } while (i <= 12);

    resultado.textContent = tabla;
});

