<script> 
function validar() {
       let carrera, escuela, grupo, grado;
       carrera=document.getElementById("carrera").value;
       escuela=document.getElementById('escuela').value;
       grupo=document.getElementById('grupo').value;
       grado=document.getElementById('grado').value;
       if (carrera==""||escuela==""||grupo==""||grado==""){
              alert("campos vacios, debes completar la informacion");
       }
}



function validarDatosLogin(){
       var correo, contraseña;
       correo=document.getElementById("correo1").value;
       contraseña=document.getElementById("pass1").value;
       if(correo==""||contraseña==""){
              alert("Agrega correo y contraseña");
       }
}


function carrera(){
       let curso= document.getElementById('carrera').value;
       let ap=//;
       let cursoap=ap.match(curso)
}


</script>