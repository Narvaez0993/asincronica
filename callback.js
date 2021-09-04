console.log("iniciando...");

function ejecutarPrograma(finalizarPrograma){


    setTimeout(function(){
        console.log("procesando...");
        finalizarPrograma();
    },5000);
    


}


ejecutarPrograma(function(){
    console.log("terminando...")

})
