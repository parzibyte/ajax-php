const $btnCargarPerfil = document.querySelector("#btnCargarPerfil"),
    $perfil = document.querySelector("#perfil"),
    $nombre = document.querySelector("#nombre"),
    $apodo = document.querySelector("#apodo"),
    $web = document.querySelector("#web");
$btnCargarPerfil.addEventListener("click", () => {
    fetch("./perfil.php")
        .then(respuesta => respuesta.json())
        .then(perfil => {
            // Aquí hacer algo con la respuesta
            $nombre.textContent = perfil.nombre;
            $apodo.textContent = perfil.apodo;
            $web.textContent = perfil.sitioWeb;
        });
});