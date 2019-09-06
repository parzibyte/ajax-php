const $btnCargarPerfil = document.querySelector("#btnCargarPerfil"),
    $perfil = document.querySelector("#perfil");
$btnCargarPerfil.addEventListener("click", () => {
    fetch("./perfil.php")
        .then(respuesta => respuesta.text())
        .then(respuestaComoHTML => {
            $perfil.innerHTML = respuestaComoHTML;
        });
});