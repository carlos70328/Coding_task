import Swal from 'sweetalert2';
import { createUser, iniciarSesion } from './login';

let obj = [];

let visibilidad = {
	user: true,
	home: false,
	idUser: 0,
};

export const loginSucces = (user, password) => {
	const validador = iniciarSesion(user, password);

	visibilidad.idUser = validador.idUser;

	if (validador.estado === false) {
		Swal.fire({
			icon: 'success',
			title: 'Bienvenido',
		});
		visibilidad.user = true;
		visibilidad.home = false;
	} else {
		Swal.fire('Datos incorrectos', 'intente nuevamente', 'question');
		visibilidad.user = false;
		visibilidad.home = true;
	}

	const formulario = document.querySelector('#fnewUsuario');
	formulario.reset();

	return visibilidad;
};

export const signUp = (name, password) => {
	let validador = createUser(name);

	let newUsuario = {
		id: Date.now(),
		name: name,
		password: password,
	};

	if (validador.estado === true) {
		if (localStorage.getItem('usuarios') === null) {
			localStorage.setItem('usuarios', JSON.stringify(obj));
		}

		const newStorage = JSON.parse(localStorage.getItem('usuarios'));
		newStorage.push(newUsuario);
		localStorage.setItem('usuarios', JSON.stringify(newStorage));
		console.log('lleno');
		Swal.fire({
			icon: 'success',
			title: 'Te has registrado',
		});
	} else {
		Swal.fire('Ya se encuentra registrado');

		console.log('lleno222222');
	}

	const formulario = document.querySelector('#fnewUsuario');
	formulario.reset();
};
