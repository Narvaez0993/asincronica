
let robasPlanos=(id,despegarNave)=>{

    if(id > 0 && id<=10){

        console.log("accedimos al plano" + id)
        despegarNave(null);
    }else{
        console.log("accedimos a un plano falso")

        despegarNave("error");
    }


}

robasPlanos(15,error=>{

   if(error){
    console.log("apague mostro...")
   }else{
        console.log("arrancando la nave...")      
   }

})