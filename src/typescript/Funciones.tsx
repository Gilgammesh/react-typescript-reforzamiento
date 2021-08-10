/*******************************************************************************************************/
// Definimos el componente //
/*******************************************************************************************************/
const Funciones = () => {
	// Inicializamos los datos de valores de los números
	const numero1: number = 4;
	const numero2: number = 5;

	// Definimos la función sumar dos números
	const sumar = (a: number, b: number): number => {
		return a + b;
	};

	// Renderizamos el componente
	return (
		<>
			<h3>Funciones</h3>
			<hr />
			<h4>Función Suma dos números</h4>
			<h5>Numero A : {numero1}</h5>
			<h5>Numero B : {numero2}</h5>
			<h5>El resultado es: {sumar(numero1, numero2)}</h5>
			<hr />
		</>
	);
};

/*******************************************************************************************************/
// Exportamos el componente por defecto //
/*******************************************************************************************************/
export default Funciones;
