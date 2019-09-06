<?php
// Definimos variables del perfil, obviamente
// estas deberían de venir de una base de datos o de la sesión
$nombre = "Luis Cabrera";
$apodo = "Parzibyte";
$sitioWeb = "https://parzibyte.me/blog";
?>
<p><strong>Nombre</strong>: <?php echo $nombre ?></p>
<p><strong>Apodo</strong>: <?php echo $apodo ?></p>
<p><strong>Sitio web</strong>: <a href="<?php echo $sitioWeb ?>">Visitar</a> </p>
