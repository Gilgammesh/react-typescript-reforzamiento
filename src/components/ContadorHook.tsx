import useCounter from '../hooks/useCounter';

/*******************************************************************************************************/
// Definimos el componente Contador //
/*******************************************************************************************************/
const ContadorHook = () => {
	// Inicializamos el rate
	const rate: number = 1;

	// Llamamos al hook
	const { contador, incrementar, decrementar } = useCounter(6);

	// Renderizamos el componente
	return (
		<>
			<h3>
				Contador con Hook: <small>{contador}</small>
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
export default ContadorHook;
