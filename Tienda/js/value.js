document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var Numero = document.getElementById('Numero').value;
    var comentarios = document.getElementById('comentarios').value;
    if(nombre.length == 0||correo.length == 0||Numero.length < 10||Numero.length > 10||correo.length == 0||comentarios.length==0||Numero< 10) {
    
        document.getElementById("error").innerHTML =  "verifique que haya llenado todos lo que se le pide, y el numero tengo 10 caracteres";
     
      return;
    }else{
        swal({
            title: "tu mensaje se envio correctamente",
            icon: "success",
    
          });
          document.getElementById("error").innerHTML =  "";
          return;
    }
    
    
    
    
    this.submit();
  }