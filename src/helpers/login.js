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
			if (usuarios.nom === user && usuarios.cont === password) {
				
				validador.estado = false;
				validador.idUser = arreglo.indexOf(usuarios);
			}
		});

		
	}
	return validador;
};

export const createUser = (user, ) => {
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
			if (usuarios.nom === user ) {
				
				validador.estado = false;
				
			}
		});

		
	}
	return validador;
};