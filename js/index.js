

let valorEntrada = 5000



function costoTotalInicio(){
    for(let i=1 ; i<100; i++){
        let nombreUsuario = prompt("Ingresa tu Nombre y Apellido");
        
        
        if(nombreUsuario == ""){
            alert("No ingresaste nombre de usuario");
        }
        else{
            alert("Hola " + nombreUsuario + ", " + "tu orden es la Nº" + i + " Recuerda que sólo se venden hasta 2 entradas por usuario.");
            let num = Number(prompt("Ingrese la cantidad de entradas que va a solicitar"));{
                if(num > 2){
                    alert("El usuario sólo puede comprar hasta 2 entradas")
                    document.write('<div class="container"><div class="figure2"><h1>Ha ocurrido un error. </h1><p>Refresque la página para volver a comenzar el proceso de compra.</p></div></div>');
                }
                else if(num<0){
                    alert("Ingrese un número válido")
                    document.write('<div class="container"><div class="figure2"><h1>Ha ocurrido un error. </h1><p>Refresque la página para volver a comenzar el proceso de compra.</p></div></div>');
                }
                else if(num == ""){
                    alert("Ingrese la cantidad de entradas que va a solicitar")
                    document.write('<div class="container"><div class="figure2"><h1>Ha ocurrido un error. </h1><p>Refresque la página para volver a comenzar el proceso de compra.</p></div></div>');
                }
                else{
                    alert("Has seleccionado la cantidad de " + num + " entradas. El total a pagar es de "  + num * valorEntrada + " pesos.");
                    let mail = prompt('Ingresa tu Email');
                    if(mail == "" ){
                        document.write('<div class="container"><div class="figure2"><h1>Error </h1><p>No ha ingresado una dirección de mail correcta. Por razones de seguridad deberá volver a comenzar el proceso de compra. Recargue la página</p></div></div>');
                    }
                    else{
                        document.write('<div class="container"><div class="figure"><h1>Felicitaciones, tu compra se ha realizado con éxito.</h1><p>Recibiras un mail en donde se te solicitará el numero de orden y se te indicaran los pasos a seguir.</p><a href="#" class="link">Pulsa aquí si no te llegó el correo.</a></div></div>');
                    
                    }
                   
                    
                }
            } 
            {break};
            
            
            
        }
}


}
costoTotalInicio()


