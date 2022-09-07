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

    if (correo==""||Numero==""||Numero<0||Numero.length<10||Numero.length>10||nombre==""||comentarios=="") {
        
        Swal.fire(
            'Uno o más campos tienen un error.',
            'recurden que no puden ir campos vacio y y el numero de telefono tiene que tener 10 digitos.',
            'error'
          )
        
        return false;
    }
    let timerInterval
    Swal.fire({
      title: 'enviando',
      html: 'enviando mensaje',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire(
            'Enviado!',
            '',
            'success'
          )
      }
    })
    return false;
}