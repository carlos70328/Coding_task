let re=[]
    
const setData2= (nombre,descri,url,index )=>{
    
    re.push({nombre,descri,url,index})
    console.log(re)
    
        localStorage.setItem('repositorios', JSON.stringify(re));
  
}

export default setData2;