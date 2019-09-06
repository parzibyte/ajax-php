<?php
// Definimos variables del perfil, obviamente
// estas deberían de venir de una base de datos o de la sesión
$nombre = "Luis Cabrera";
$apodo = "Parzibyte";
$sitioWeb = "https://parzibyte.me/blog";
// Preparar el objeto que vamos a mostrar
$datos = [
    "nombre" => $nombre,
    "apodo" => $apodo,
    "sitioWeb" => $sitioWeb,
];
// Mostrar codificadas como JSON
echo json_encode($datos);
