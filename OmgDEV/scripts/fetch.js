function  Notas (pIdUsuario,pIdNota,pTitulo,pBody) {

    this.idUsuario  = pIdUsuario;
    this.idNota = pIdNota;
    this.titulo = pTitulo;
    this.body = pBody;

};

var ListmNotas= [Notas];


   fetch('https://jsonplaceholder.typicode.com/posts')
    //como es una promesa, necesitamos then . en la primera formateamos la informacin obtenida.
    .then (data => data.json())  
    // en el segundo then hacemos lo que queremos con la data.
    .then(data=>{


  for ( index in data) {
    if (data.hasOwnProperty(index)) {

    var mNota = new Notas();
    mNota.idUsuario = data[index].userId;
    mNota.idNota = data[index].id
    mNota.titulo = data[index].title
    mNota.body = data[index].body
    ListmNotas.push(mNota);


//    console.log(mNota);
    }
}

    

    });



var VerTodos = document.getElementById('VerTodos').addEventListener('click',e =>{


    var Cuerpo= document.getElementById('cuerpo');

    Cuerpo.innerHTML='' ;

 ListmNotas.forEach(pNotas => {
    
    if(typeof pNotas != "function") {
        Cuerpo.innerHTML+=`

        <tr>
        <td scope="row">${pNotas.idNota}</td>
        <td>${pNotas.idUsuario}</td>
        <td>${pNotas.titulo}</td>
        <td class="text-center">${pNotas.body}</td>
        </tr>
    
        `;
    }
});


    e.preventDefault();
 
 //   console.log(Cuerpo);


});

var Buscador = document.getElementById("buscadorprincipal").addEventListener('click',e=>{
    
    e.preventDefault();

    var textoBuscador= document.getElementById('textoBuscador').value;

    var Encontrados = [] ;

    let Buscador = function (pId){

        if (parseInt(pId,32) > 0) {

 ListmNotas.forEach((pNotas,indice) => {
    if(typeof pNotas != "function") {
        if (pId==pNotas.idUsuario) {
            Encontrados.push(pNotas) ;
                   }    
    }
     
});      
 }else {
              alert('Ingrese un numero valido!')
          
  }

}

Buscador(textoBuscador);



AgregarAlDom('cuerpo',Encontrados);







}) ;





function AgregarAlDom(etiqueta,Lista) {

    var Lugar= document.getElementById(etiqueta);

    Lugar.innerHTML='' ;

    Lista.forEach(pNotas => {
    
        if(typeof pNotas != "function") {
            Lugar.innerHTML+=`
    
            <tr>
            <td scope="row">${pNotas.idNota}</td>
            <td>${pNotas.idUsuario}</td>
            <td>${pNotas.titulo}</td>
            <td class="text-center">${pNotas.body}</td>
            </tr>
        
            `;
        }
    });
    
}


