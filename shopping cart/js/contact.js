const showError = (element, error) => {
    const errorEl=document.createElement("div");
    errorEl.setAttribute("class","error");
    errorEl.innerHTML=error;
    document.querySelector(element).parentElement.prepend(errorEl);
}

const validarFormulario = () => {
   
    const Numero=document.formName.Numero.value;
    const correo=document.formName.correo.value;
    const nombre=document.formName.nombre.value;
    const comentarios = document.formName.comentarios.value;
   
 
    for (let el of document.querySelectorAll("div[class=error]")) {
        el.remove();
    }

    if (correo==""||Numero==""||Numero<0||Numero.length<10||nombre==""||comentarios=="") {
        if (correo=="") {
            showError("input[name=correo2]", "este cambo no puede ir vacio");
        }
        
        if (Numero=="") {
            showError("input[name=alerNum]", "no puede ir vacio");
        } else if (Numero<0) {
            showError("input[name=alerNum]", "numero no puede ser negativo");
        }else if (Numero.length<10) {
            showError("input[name=alerNum]", "el números de caracteres tiene que ser de 10 ");
        }
        if(nombre==""){
            showError("input[name=alerNom]", "este cambo no puede ir vacio");
        }
        if(comentarios==""){
            showError("input[name=comen]", "este cambo no puede ir vacio");
            
        }
       
        
        return false;
    }
        swal({
            title: "compra exitosa ",
            text: "Gracias por comprar!",
            icon: "success",
            button: "ok",
          });
   
    return false;
}