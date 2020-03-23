/*
Funciones flecha, son una forma mas acotada de escribir funciones
Son mas utilizadas en callbaks para tener menos codigo


Si tenemos una sola linea usamos metodo 1
Si tenemos que declarar callback podemos usar metodo 2
Si tenemos mas de un parametro los parentesis son obligatorios.
(ver parametros metodo 1).

Si tenemos mas de una instruccion ver metodo 3 , debemos usar las llaves.


*/

var mPar2= ""

//Metodo 1 
    //nombre      Parametros         REtorno directo + Callback
var UnaFuncion = (par1,Callback) =>  Callback(par1) ;

//Metodo 2
// llamo fun               //declaro F felcha y hago lo que tengo que hacer 
UnaFuncion('Devuelve ok', dato => console.log(dato));

//metodo 3
UnaFuncion('Devuelve ok', dato => {console.log(dato)
mPar2=dato;
});
//Prueba de que funciona el metodo 3
console.log(mPar2);

   