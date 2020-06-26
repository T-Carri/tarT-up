<?php
$host='localhost';
$user='root';
$pass='';
$database='Tarup';
$conexion = mysqli_connect($host,$user,$pass,$database);
if ($conexion) { 
echo 'Conexión exitosa' ; 
  }
  else {  echo 'Error al conectar la BD';
  }
mysqul_select_db($database, $conexion);

  $consultar= mysql_query("SELECT nombreUsuario FROM usersT WHERE userT LIKE '$usuario'  AND passwordT LIKE '$password'", $conexion );
  $dato=mysql_fetch_array($consultar);
  $cambia=$dato["nombre"];
  echo "<hr size=10 color=ffff width=100% aling=left>";
  if($dato==""){
      echo "Los datos no son correctos";
      fopen(index.html,r);
  }else{fopen(T1.HTML,r);}


?>