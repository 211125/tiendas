var select =document.querySelector('select');
var html = document.querySelector('div')


select.addEventListener('change',backgrounds);

let precio=0;
function backgrounds(){

    var choice=select.value;
    if (choice=='ropa1') { 
        precio=100; 
        document.getElementById("demo").innerHTML = `
        <img  height="205" width="308" src="./img/ropa6.jpeg"></img>
        <p class="text"><strong>Producto :</strong> Nirvana Nevermind</p>
        <p class="text"><strong>Precio :</strong> $${precio}</p>`;

    }
    else if(choice=='ropa2'){
        precio=150;
        document.getElementById("demo").innerHTML =  `
        <img  height="205" width="308" src="./img/ropa7.jpeg"></img> 
        <p class="text"><strong>Producto :</strong> Metallica VERTIGO</p>
        <p class="text"><strong>Precio :</strong> $${precio}</p>`;
    }
    else if (choice=='ropa3') {
        precio=170;
        document.getElementById("demo").innerHTML = `
        <img  height="205" width="308" src="./img/ropa8.jpeg"></img>
        <p class="text"><strong>Producto :</strong>Mickey MOUSE</p>
        <p class="text"><strong>Precio :</strong> $${precio}</p>`;
    }
    else if(choice=='ropa4'){
        precio=200;
        document.getElementById("demo").innerHTML = `
        <img  height="205" width="308" src="./img/ropa5.jpg"></img>
        <p class="text"><strong>Producto :</strong>liso azul casual</p>
        <p class="text"><strong>Precio :</strong> $${precio}</p>`;
    }
}





function ShowSelected2()
{
    var choice=select.value;
  if (choice=='') {
    swal({
        title: "Algo estuvo mal",
        text: "necesitas seleccionar un producto ",
        icon: "error",
        dangerMode: true,
      });
    return false;
    }else if (choice=='ropa1') { 
        precio=100; 
        var combo2 = document.getElementById("backgrounds");
   var ropa = combo2.options[combo2.selectedIndex].text;
    let tbl1=document.getElementById('tbl1').insertRow(-1);
    let col1=tbl1.insertCell(0);
    let col2=tbl1.insertCell(1);


    col1.innerHTML=ropa;
    col2.innerHTML=precio;
    console.log(col1);
    console.log(col2);
    }
    else if(choice=='ropa2'){
        precio=150;
        var combo2 = document.getElementById("backgrounds");
        var ropa = combo2.options[combo2.selectedIndex].text;
         let tbl1=document.getElementById('tbl1').insertRow(-1);
         let col1=tbl1.insertCell(0);
         let col2=tbl1.insertCell(1);
         col1.innerHTML=ropa;
         col2.innerHTML=precio;
         console.log(col1);
         console.log(col2);
    }
    else if (choice=='ropa3') {
        precio=170;
        var combo2 = document.getElementById("backgrounds");
        var ropa = combo2.options[combo2.selectedIndex].text;
         let tbl1=document.getElementById('tbl1').insertRow(-1);
         let col1=tbl1.insertCell(0);
         let col2=tbl1.insertCell(1);
         col1.innerHTML=ropa;
         col2.innerHTML=precio;
         console.log(col1);
         console.log(col2);
    }
    else if(choice=='ropa4'){
        precio=200;
        var combo2 = document.getElementById("backgrounds");
        var ropa = combo2.options[combo2.selectedIndex].text;
         let tbl1=document.getElementById('tbl1').insertRow(-1);
         let col1=tbl1.insertCell(0);
         let col2=tbl1.insertCell(1);
         col1.innerHTML=ropa;
         col2.innerHTML=precio;
         console.log(col1);
         console.log(col2);
    }
        
    
    
    
    
}
let total=0;
let totalApagar=0;
function calcularTotal() {
   
       let celtaPrecio = document.querySelectorAll('td + td');
          for(let i=0; i<celtaPrecio.length;++i){
                 total+=parseFloat(celtaPrecio[i].firstChild.data)
                 console.log(total)
   }
    
          document.getElementById("demoTotal").innerHTML =  total; 
          totalApagar=total;
          total=0;  
}
function app(){
    ShowSelected2();
    calcularTotal();
    
}
function pagarCompra(){
    swal({
        title: "total a pagar: $"+totalApagar,
        icon: "success",
        button: "pagar",
      });
      total=0;
      
      let celtaPrecio = document.querySelectorAll('td + td');
    var x = document.getElementById("tbl1");
    for(let i=0; i<celtaPrecio.length;++i){
        x.deleteRow(-1);}
        document.getElementById("demoTotal").innerHTML =  total;
        totalApagar=0;
       
}
