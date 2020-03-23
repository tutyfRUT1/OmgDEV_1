// funciones anonimas - Callbacks

/*
Una funcion anonima es una funcion que no tiene nombre,
Un callback es una funcion que se ejecuta dentro de otra
Los callbacks se llaman en los parametros de las funciones,
deben estar definidos previamente o se pueden
definir en el parametro tambien

*/


//funcion anonima... :

 var UnaFuncion = function (par1){
   //  return par1;
console.log(par1);
 }
 


 //callbacks  :


 function MostraraLGO(P1,P2,funcion){
    let suma=P1+P2;

    // Invocamos callback
    funcion(suma);
 }      

//1 -Invocamos la funcion 'MostrarAlgo'
// 2- declaramos la funcion dentro del parametro. 
 MostraraLGO(1,2,function(datoAmostrar){
console.log(datoAmostrar);
 });


