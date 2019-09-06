<?php
$datos = json_decode(file_get_contents("php://input"));
// Aquí podemos procesar los datos
$nombre = $datos->nombre;
$correo = $datos->correo;
$edad = $datos->edad;
file_put_contents("datos.txt", "Nombre: $nombre, Correo: $correo, Edad: $edad\n", FILE_APPEND);
echo json_encode("Formulario enviado");
