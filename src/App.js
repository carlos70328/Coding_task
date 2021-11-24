import React, { useState } from 'react';
import Imagen from './components/carga';
import './login.css';
import ListarRepo from './components/listarRepos';
import { loginSucces, signUp } from './helpers/loginSucces';
import { getRepos } from './helpers/getRepos';

let idUser = 0;

function App() {
	const [homeSection, setHomeSection] = useState(true);
	const [userSection, setUserSection] = useState(false);
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [repositorios, setRepositorios] = useState([]);

	const login = (e) => {
		e.preventDefault();
		getRepos(user)
			.then((repos) => {setRepositorios(repos);})
			.catch(error => console.log(error));
		const visibilidad = loginSucces(user, password);
		setUserSection(visibilidad.user);
		setHomeSection(visibilidad.home);	
		idUser = visibilidad.idUser;
	};

	const singUp = (e) => {
		e.preventDefault();
		signUp(user, password);
	};

	const cerrarSesion = (e) => {
		e.preventDefault();
		setHomeSection(true);
		setUserSection(false);
		localStorage.setItem('repositorios', []);
	};

	return (
		<div className='App'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a href='./' className='navbar-brand'>
					Test<b>Coding</b>
				</a>
				<div className='navbar-nav ml-auto action-buttons'>
					{homeSection && (
						<div className='nav-item dropdown'>
							<a
								href='./'
								data-toggle='dropdown'
								className='nav-link dropdown-toggle mr-4'
							>
								Login
							</a>
							<div className='dropdown-menu action-form'>
								<form id='usuario' onSubmit={login}>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											placeholder='Username'
											required='required'
											onChange={(e) => setUser(e.target.value)}
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											className='form-control'
											placeholder='Password'
											required='required'
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<input
										type='submit'
										className='btn btn-primary btn-block'
										value='Login'
									/>
								</form>
							</div>
						</div>
					)}
					{homeSection && (
						<div className='nav-item dropdown'>
							<a
								href='./'
								data-toggle='dropdown'
								className='btn btn-primary dropdown-toggle sign-up-btn'
							>
								Sign up
							</a>
							<div className='dropdown-menu action-form'>
								<form id='fnewUsuario' onSubmit={singUp}>
									<p className='hint-text'>
										Crea una cuenta usanto tu usuario de GitHub
									</p>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											placeholder='Username'
											required='required'
											onChange={(e) => setUser(e.target.value)}
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											className='form-control'
											placeholder='Password'
											required='required'
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<input
										type='submit'
										className='btn btn-primary btn-block'
										value='Sign up'
									/>
								</form>
							</div>
						</div>
					)}
					{userSection && (
						<div className='nav-item dropdown'>
							<div className='dropdown-menu1'>
								<form id='fnewUsuario' type='submit' onSubmit={cerrarSesion}>
									<input
										type='submit'
										className='btn btn-primary btn-block'
										value='Log out'
									/>
								</form>
							</div>
						</div>
					)}
				</div>
			</nav>
			{homeSection && <Imagen />}
			{userSection && <ListarRepo repos={repositorios} idUser={idUser} />}
		</div>
	);
}

export default App;
