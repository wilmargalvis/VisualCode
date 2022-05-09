//document.getElementById("form-form1").addEventListener("submit", function (e){
function Validar() {
    var n1=document.getElementById("nombre").value;
    var n2=document.getElementById("apellido").value;
    var suma=parseInt(n1)+parseInt(n2);
    console.log(suma);

    var inputs = document.getElementsByClassName('cuadro_texto');
    for (var i = 0; i < inputs.length; i++) {
        console.log(i + "hola");
        alert(n1.value);

            // if(inputs[i].id="wil"){
            //     // inputs.classList.add("error");[ ]
            //     //console.log(inputs[i]);
            //     alert(inputs[i].id);            
            // }

    }
}   
//});