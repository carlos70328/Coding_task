
const getData=()=>{
    let data= localStorage.getItem('usuarios');
    data = JSON.parse(data)
   
    return (data)

}

export  default getData;