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

export const signUp = (user, password) => {
	let validador = createUser(user);

	let newUsuario = {
		id: Date.now(),
		nom: user,
		cont: password,
	};

	if (validador.estado === true) {
		obj.push(newUsuario);
		localStorage.setItem('usuarios', JSON.stringify(obj));

		Swal.fire({
			icon: 'success',
			title: 'Te has registrado',
		});
	} else {
		Swal.fire('Ya se encuentra registrado');
	}
	const formulario = document.querySelector('#fnewUsuario');
	formulario.reset();
};
