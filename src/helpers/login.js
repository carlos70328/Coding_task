export const iniciarSesion = (user, password) => {
	// const arreglo = [];
	const validator = {
		estado: true,
		idUser: 0,
	};

	const arreglo = JSON.parse(localStorage.getItem('usuarios'));

	if (arreglo === null) {
		validator.estado = true;
	} else {
		arreglo.map((usuarios) => {
			if (usuarios.name === user && usuarios.password === password) {
				validator.estado = false;
				validator.idUser = arreglo.indexOf(usuarios);
			}
			return true;
		});
	}
	return validator;
};

export const createUser = (name) => {
	const validator = {
		estado: true,
		idUser: 0,
	};

	const arreglo = JSON.parse(localStorage.getItem('usuarios'));

	if (arreglo === null) {
		validator.estado = true;
	} else {
		arreglo.map((usuarios) => {
			if (usuarios.name === name) {
				validator.estado = false;
			}
			return true;
		});
	}

	return validator;
};
