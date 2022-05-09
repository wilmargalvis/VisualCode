var edad = 39;
var prueba = document.getElementById("prueba");
prueba.innerHTML = "Envío Javascript a ID Html";
//Template de string, utilizando la comilla invertida: Altgr + Tecla al lado del Enter(})
if (edad < 40) {
    prueba.innerHTML = `
    <h1>Ejemplo de Texto</h1>
    <h2>Mi edad es ${edad}</h2>`;
}

for (var i = 0; i < edad - 30; i++) {
    //Para NO reemplazar el contenido del Id prueba, agrego el +, antes del =
    prueba.innerHTML += `<h4>La iteración es ${i}</h4>`;
}

function Muestra_Edad(edad, estatura) {
    var prueba = document.getElementById("prueba");
    prueba.innerHTML += "Envío Javascript a ID Html, de la Función";
    //Template de string, utilizando la comilla invertida: Altgr + Tecla al lado del Enter(})
    if (edad < 200) {
        prueba.innerHTML += `
    <h1>Ejemplo de Texto edad 1</h1>
    <h2>Mi edad es ${edad}</h2>
    <h2>Mi estatura es ${estatura}</h2>`;
    }
}

Muestra_Edad(100, "1,58 cm");

function Muestra_edad2(edad, estatura) {
    datos = `
    <h1>Ejemplo de Texto Edad 2</h1>
    <h2>Mi edad es ${edad}</h2>
    <h2>Mi estatura es ${estatura}</h2>`;

    return datos;
}

function Imprimir_edad2() {
    var prueba = document.getElementById("prueba");
    prueba.innerHTML += Muestra_edad2(150, "1,70 cm");
}

Imprimir_edad2();

var nombres = ['Nelson', 'Stiven', 'Vale', 'Claudia'];
document.write('<h1>Listado de Nombres</h1>');

for (var i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br>');
}

document.write('<br>');

nombres.forEach(nombres => { //=>  Expresión Labda, Función anónima o de flecha
    document.write(nombres + '<br>');
});

function validation() {
    // var nombre = document.getElementById("nombre").value;
    // var apellido = document.getElementById("apellido").value;
    //var error_Mensaje = document.getElementById("error_Mensaje").value;

    var a = 1;
    var b = 2;
    if (a > b) {
        console.log("bien");
    } else { console.log("mal"); }

    if (nombre.value = "") {
        alert("No se ha llenado el nombre");
        return false;
    }
    if (apellido.value = "") {
        alert("No se ha llenado el apellido");
        return false;
    }
    return false;
}

function Validador() {
    var nombreW =document.getElementById("nombre").value;
    // var apellido=document.getElementById("apellido").value;
    // var mensaje=document.getElementById("mensaje").value;
    // var mensaje_error=document.getElementById("Mensaje_Error").value;
    // var texto;

    // mensaje_error.style.padding="10px";
    if (nombre.value="") {
        // texto="Falta agregar el Nombre";
        // mensaje_error.innerHTML=texto;
        alert("ojo");
        return false;
    }
    return false;
}