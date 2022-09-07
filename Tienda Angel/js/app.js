let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
   
}

function pay() {
  
    Swal.fire({
        title: `el monto a pagar es de $${total}`,
        showDenyButton: true,
      
        confirmButtonText: 'pagar',
        denyButtonText: `seguir comprando`,
      }).then((result) => {
       
        if (result.isConfirmed) {
          Swal.fire('pago exitoso!', '', 'success')
          document.getElementById("checkout").innerHTML ="pagar: 0"
          total=0;
          
        } else if (result.isDenied) {
          Swal.fire('el pago no se completo ', '', 'error')
        }
      })
}