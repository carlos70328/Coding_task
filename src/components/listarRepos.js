import React from "react";
import "../login.css";
// import setData2 from "./localStorage2"

const listarRepo = (repos) => {
    let a = repos.n
    let array = repos.repos


    const mostraFavoritos = (e) => {
        e.preventDefault()
        console.log("funciona")

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="mis-repos estilo-x">Mis repositorios</h1>
                    {array[a] && <img className="img-fluid border" src={array[a].owner.avatar_url} alt="avatar" />
                    }
                    <ul>
                    {array.map((usuario, index) => {
                        // setData2(usuario.name, usuario.description, usuario.owner.repos_url, index)
                        return (
                            <form key={index}  onSubmit={mostraFavoritos}>
                                <li className="lista input2" >
                                    <input className="input2" type="submit" value={usuario.name} ></input>
                                    <p>{usuario.description}</p></li></form>)
                    })}</ul>
                </div>
                <div className="col-md-6" id="lista-favoritos">
                    <h1 className="mis-repos estilo-x">Mis Favoritos</h1>
                    <div className="border">
                        <li>deberia estar mis favoritos</li>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default listarRepo