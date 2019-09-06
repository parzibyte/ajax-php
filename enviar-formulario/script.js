const $nombre = document.querySelector("#nombre"), // los 3 input
    $correo = document.querySelector("#correo"),
    $edad = document.querySelector("#edad"),
    $btnEnviar = document.querySelector("#btnEnviar"), // El botón que envía el formulario
    $respuesta = document.querySelector("#respuesta"); // el div que muestra mensajes

// Agregar listener al botón
$btnEnviar.addEventListener("click", () => {
    // Poner un estado de "enviando"
    $respuesta.textContent = "Cargando...";
    // Armar objeto con datos
    const datos = {
        nombre: $nombre.value,
        correo: $correo.value,
        edad: $edad.value,
    };
    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
            method: "POST", // Enviar por POST
            body: datosCodificados, // En el cuerpo van los datos
        })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            $respuesta.textContent = respuestaDecodificada;
        });
});