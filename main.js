var datos = document.getElementById("datos");
var nombre = "Sebastian";
var apellidos = "Rojas";
var altura = 1.80;





for (var i = 2004; i <=2023; i++){
    datos.innerHTML += "<h4>Estamos en el año:     </h4>"+i;





}

function MuestraMiNombre(){
    datos.innerHTML = `
    <h1>Nombre: ${nombre}</h1>
    <h2>Apellidos: ${apellidos}</h2>
    <h3>Altura: ${altura}</h3>

    `;


}

MuestraMiNombre();