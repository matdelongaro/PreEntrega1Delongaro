// Los primeros 10 turnos dispondrán de un descuento en la entrada.
// Luego , el valor de las mismas aumentará. (*Luego de que el número de turno llegue al valor 11)

let valorEntradaPrimerPreventa = 5000

function costoTotalInicio(){
    for(let i=1 ; i<10; i++){
        let nombreUsuario = prompt("Ingresa tu Nombre y Apellido");
        
        if(nombreUsuario == ""){
            alert("No ingresaste nombre de usuario");
        }
        else{
            alert("Hola " + nombreUsuario + "," + "tienes el turno Nº" + i + " que corresponde a la Primer Preventa ($5000). Sólo se venden hasta 5 entradas por usuario.");
            let num = Number(prompt("Ingrese la cantidad de entradas que va a solicitar"));{
                if(num>5){
                    alert("El usuario sólo puede comprar hasta 5 entradas")
                }
                else if(num == ""){
                    alert("Ingrese la cantidad de entradas que va a solicitar")
                }
                else{
                    alert("Has seleccionado la cantidad de " + num + " entradas. El total a pagar es de "  + num * valorEntradaPrimerPreventa + " pesos.")
                }
            }
            {break};
            
        }
}


}
costoTotalInicio()

let valorEntradaSegundaPreventa = 7000

function costoTotal(){
    for(let i=11 ; i<100; i++){
        let nombreUsuario = prompt("Ingresa tu Nombre y Apellido");
        
        if(nombreUsuario == ""){
            alert("No ingresaste nombre de usuario");
        }
        else{
            alert("Hola " + nombreUsuario + "," + "tienes el turno Nº" + i + " que corresponde a la Segunda Preventa ($7000). Sólo se venden hasta 5 entradas por usuario. ");
            let num = Number(prompt("Ingrese la cantidad de entradas que va a solicitar"));{
                if(num>5){
                    alert("El usuario sólo puede comprar hasta 5 entradas")
                }
                else if(num == ""){
                    alert("Ingrese la cantidad de entradas que va a solicitar")
                }
                else{
                    alert("Has seleccionado la cantidad de " + num + " entradas. El total a pagar es de "  + num * valorEntradaSegundaPreventa + " pesos.")
                }
            }
           {break};
           
            
        }
}


}
costoTotal()











