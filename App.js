import Imagen from './components/carga';
import React, { useState, useEffect } from "react";
import setData from "./components/localStorage"
import "./login.css";
import getData from "./components/getData";
import Swal from 'sweetalert2'
import comprobar from './components/comprobacion'
import { iniciarSesion, tomarid } from './components/login'
import ListarRepo from './components/listarRepos';

let obj = [];
let bol = true
let b = []
let a = 0
let url = ""

function App() {

  const [controlarSeccion, setControlarSeccion] = useState(true)
  const [controlarSeccion2, setControlarSeccion2] = useState(false)
  const [nombre, setNombre] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [repositorios, setRepositorios] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then(response => response.json())
        .then(json => setRepositorios(json))
        .catch(error => console.log(error))
    }
    fetchData()
  }, [b])

  const HandleSubmit2 = (e) => {
    e.preventDefault()
    bol = iniciarSesion(nombre, contrasena)
    if (bol === false) {
      Swal.fire({
        icon: 'success',
        title: "Bienvenido",
      })
      setControlarSeccion(bol)
      a = tomarid()
      let nombres = getData()
      if (localStorage.getItem('usuarios') === null) {
        console.log("sin datos")
        b = "example"
      } else {
        b = (nombres[a].nom)
      }
      url = `https://api.github.com/users/${b}/repos`
      setControlarSeccion2(true)
    } else {
      Swal.fire(
        'Datos incorrectos',
        'intente nuevamente',
        'question'
      )
    }
    const formulario = document.querySelector('#fnewUsuario')
    formulario.reset();

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUsuario = {
      id: Date.now(),
      nom: nombre,
      cont: contrasena
    };
    bol = comprobar(nombre, contrasena)
    if (bol === true) {
      obj.push(newUsuario)
      setData(obj)
      Swal.fire({
        icon: 'success',
        title: "Te has registrado",
      })
    } else {
      Swal.fire('Ya se encuentra registrado')
    }
    const formulario = document.querySelector('#fnewUsuario')
    formulario.reset();
  }

  const cerrarSesion = (e) => {
    e.preventDefault()
    setControlarSeccion(true)
    setControlarSeccion2(false)
    localStorage.setItem('repositorios',[ ])
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="./" className="navbar-brand">Test<b>Coding</b></a>
        <div className="navbar-nav ml-auto action-buttons">
          {controlarSeccion &&
            <div className="nav-item dropdown">
              <a href="./" data-toggle="dropdown" className="nav-link dropdown-toggle mr-4">Login</a>
              <div className="dropdown-menu action-form">

                <form id="usuario" onSubmit={HandleSubmit2} >
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required" onChange={e => setNombre(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required" onChange={e => setContrasena(e.target.value)} />
                  </div>
                  <input type="submit" className="btn btn-primary btn-block" value="Login" />
                </form>
              </div>
            </div>}
          {controlarSeccion &&
            <div className="nav-item dropdown">
              <a href="./" data-toggle="dropdown" className="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
              <div className="dropdown-menu action-form">
                <form id="fnewUsuario" onSubmit={handleSubmit} >
                  <p className="hint-text">Crea una cuenta usanto tu usuario de GitHub</p>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required" onChange={e => setNombre(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required" onChange={e => setContrasena(e.target.value)} />
                  </div>
                  <input type="submit" className="btn btn-primary btn-block" value="Sign up" />
                </form>
              </div>
            </div>}
          {controlarSeccion2 &&
            <div className="nav-item dropdown">
              <div className="dropdown-menu1">
                <form id="fnewUsuario" type="submit" onSubmit={cerrarSesion}>
                  <input type="submit" className="btn btn-primary btn-block" value="Log out" />
                </form>
              </div>
            </div>}
        </div>
      </nav>
      {controlarSeccion &&
        <Imagen />}
      {controlarSeccion2 &&
        <ListarRepo repos={repositorios} n={a} />}
    </div>
  );
}

export default App;
