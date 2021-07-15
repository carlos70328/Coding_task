const comprobar= (n,m) =>{
    let arreglo =[]
    let validacion=false
   
    arreglo = JSON.parse(localStorage.getItem('usuarios'))
    
    
    if (arreglo === null) {
        return true
    }
    else{
    arreglo.map(usuarios => {
        if (usuarios.nom === n ) {
          if (usuarios.cont === m) {
             validacion=false;
            
             }
            return validacion
         } 
       
         validacion=true;
         return validacion
    })
   return validacion
    } 
 }

export default comprobar;