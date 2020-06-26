<?php 
$operando1=$_POST['operando1'];
$operando2=$_POST['operando2'];

$operacion=$_POST['operaciones'];
$resultado=0;
if($operacion=="+"){
    $resultado=$operando1+$operando2;
}  elseif ($operacion=="-") {
    $resultado=$operando1-$operando2;
    
}
  elseif ($operacion=="*") {
    $resultado=$operando1*$operando2;    
}

 elseif ($operacion=="/") {
    $resultado=$operando1/$operando2;
}

echo "El resultado es: ". $resultado;
  ?>