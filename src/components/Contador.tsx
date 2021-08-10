/*******************************************************************************************************/
// Importamos las librerias //
/*******************************************************************************************************/
import { useState } from 'react';

/*******************************************************************************************************/
// Definimos el componente Contador //
/*******************************************************************************************************/
const Contador = () => {
	// Inicializamos el contador
	const [contador, setcontador] = useState(0);
	// Inicializamos el rate
	const rate: number = 1;

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

	// Renderizamos el componente
	return (
		<>
			<h3>
				Contador: <small>{contador}</small>
			</h3>
			<button className="btn btn-primary" onClick={() => incrementar(contador, rate)}>
				+{rate}
			</button>
			&nbsp;&nbsp;&nbsp;
			<button className="btn btn-primary" onClick={() => decrementar(contador, rate)}>
				-{rate}
			</button>
		</>
	);
};

/*******************************************************************************************************/
// Exportamos el componente por defecto //
/*******************************************************************************************************/
export default Contador;
