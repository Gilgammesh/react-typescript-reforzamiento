/*******************************************************************************************************/
// Importamos las librerias //
/*******************************************************************************************************/
import { useState } from 'react';

/*******************************************************************************************************/
// Definimos el hook personalizado para alterar el contador //
/*******************************************************************************************************/
const useCounter = (initValue: number = 0) => {
	// Inicializamos el contador
	const [contador, setcontador] = useState(initValue);

	// Función para incrementar el contador
	const incrementar = (value: number, rate: number) => {
		setcontador(value + rate);
	};

	// Función para decrementar el contador
	const decrementar = (value: number, rate: number) => {
		if (value - rate >= 0) {
			setcontador(value - rate);
		} else {
			setcontador(value);
		}
	};

	// Retornamos el valor y los métodos
	return {
		contador,
		incrementar,
		decrementar
	};
};

export default useCounter;
