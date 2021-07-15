const setData= (usuario) =>{

        localStorage.setItem('usuarios', JSON.stringify(usuario));
   
}

export default setData;