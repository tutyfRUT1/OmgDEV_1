'use strict';

/*
Ingresar  6 numeros por pantalla y mostrar en un array.
Mostrar el  array entero todos sus elementos en el cuerpo de la pagina y mostrarlo.
Invertir su orden y mostrarlo
Mostrar cuantos elementos tiene el array
Busqueda de un valor introducido por le usuario y que nos diga si lo encunetra y su indice.


*/

let  numeros = [] ;

let btnIngresar = document.getElementById('btningresar').addEventListener('click',function(e){

    let  mInput = document.getElementById('contenedor').value;
    numeros.push(mInput)

    

   
   // document.appendChild('<br></br>');

for (let i = 0; i < numeros.length; i++) {
    document.writeln(numeros[i]).preventDefault(e) ;
    
}



    


    });
//btnIngresar.remove();



 