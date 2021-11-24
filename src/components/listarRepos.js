import React from 'react';
import '../login.css';

const listarRepo = ({ repos, idUser }) => {
	
	const mostraFavoritos = (e) => {
		e.preventDefault();
		
	};
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6'>
					<h1 className='mis-repos estilo-x'>Mis repositorios</h1>
					{repos[idUser] && (
						<img
							className='img-fluid border'
							src={repos[idUser].img}
							alt='avatar'
						/>
					)}
					<ul>
						{repos.map((usuario, index) => {
							return (
								<form key={index} onSubmit={mostraFavoritos}>
									<li className='lista input2'>
										<input
											className='input2'
											type='submit'
											value={usuario.name}
										></input>
										<p>{usuario.description}</p>
									</li>
								</form>
							);
						})}
					</ul>
				</div>
				<div className='col-md-6' id='lista-favoritos'>
					<h1 className='mis-repos estilo-x'>Mis Favoritos</h1>
					<div className='border'>
						<li>deberia estar mis favoritos</li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default listarRepo;
