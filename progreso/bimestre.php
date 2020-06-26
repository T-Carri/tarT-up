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

//esta conexion ya quedó 


echo $escuela = $_POST['escuela'];
echo $carrera = $_POST['carrera'];
echo $grupo = $_POST['grupo'];
echo $grado = $_POST['grado'];
/*
ok
*/

$insertar = "INSERT INTO Bimestre(escuela, carrera ,grupo, grado) VALUES('".$escuela."', '".$carrera."','".$grupo."','".$grado."')"; 

$resultado = mysqli_query($conexion, $insertar);

if (!$resultado){
    
    echo 'Error al registrarse';
} else {
    echo 'Usuario registrado exitosamente';
} 
mysqli_close($conexion);

?> 