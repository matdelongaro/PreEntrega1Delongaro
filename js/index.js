// Los primeros 10 turnos dispondrán de un descuento en la entrada.
// Luego , el valor de las mismas aumentará. (*Luego de que el número de turno llegue al valor 11)

let valorEntrada = 5000


function costoTotalInicio(){
    for(let i=1 ; i<10; i++){
        let nombreUsuario = prompt("Ingresa tu Nombre y Apellido");
        
        
        if(nombreUsuario == ""){
            alert("No ingresaste nombre de usuario");
        }
        else{
            alert("Hola " + nombreUsuario + "," + "tu orden es la Nº" + i + " Recuerda que sólo se venden hasta 2 entradas por usuario.");
            let num = Number(prompt("Ingrese la cantidad de entradas que va a solicitar"));{
                if(num>2){
                    alert("El usuario sólo puede comprar hasta 2 entradas")
                }
                else if(num == ""){
                    alert("Ingrese la cantidad de entradas que va a solicitar")
                }
                else{
                    alert("Has seleccionado la cantidad de " + num + " entradas. El total a pagar es de "  + num * valorEntrada + " pesos.");
                    let mail = prompt('Ingresa tu Email');
                    if(mail == ""){
                        alert("Debes ingresar tu mail, allí te llegaran las entradas. Por razones de seguridad deberás comenzar nuevamente el proceso");
                    }
                    else{
                        document.write('<div class="container"><div class="figure"><h1>Felicitaciones, tu compra se ha realizado con éxito.</h1><p>Recibiras un mail en donde se te solicitará el numero de orden y se te indicaran los pasos a seguir.</p><a href="#">Pulsa aquí si no te llegó el correo.</a></div></div>');
                    }
                   
                    
                }
            } 
            {break};
            
            
            
        }
}


}
costoTotalInicio()


