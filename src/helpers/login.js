export const iniciarSesion = (user, password) => {
	let arreglo = [];
	let validador = {
		estado: true,
		idUser: 0,
	};

	arreglo = JSON.parse(localStorage.getItem('usuarios'));

	if (arreglo === null) {
		validador.estado = true;
	} else {
		arreglo.map((usuarios) => {
			if (usuarios.name === user && usuarios.password === password) {
				validador.estado = false;
				validador.idUser = arreglo.indexOf(usuarios);
			}
		});
	}
	return validador;
};

export const createUser = (name) => {
	let arreglo = [];
	let validador = {
		estado: true,
		idUser: 0,
	};

	arreglo = JSON.parse(localStorage.getItem('usuarios'));

	if (arreglo === null) {
		validador.estado = true;
	} else {
		arreglo.map((usuarios) => {
			if (usuarios.name === name) {
				console.log('1');
				validador.estado = false;
			}
		});
	}

	console.log(validador);
	return validador;
};
