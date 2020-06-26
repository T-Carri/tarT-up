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


echo $nombreUsuario = $_POST['nombreUsuario'];
echo $correo = $_POST['correo'];
echo $password = $_POST['pass'];


$insertar="INSERT INTO usersT(userT, paswordT, nombreUsuario)VALUES('".$correo."','".$password."','".$nombreUsuario."')";
$resultado = mysqli_query($conexion, $insertar);
if (!$resultado){
    
    echo 'Error al registrarse';
      
} else {
    echo 'Usuario registrado exitosamente';
   
} 
mysqli_close($conexion);

?>