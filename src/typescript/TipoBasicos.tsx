/*******************************************************************************************************/
// Definimos la Interface para crear el modelo de Direccion //
/*******************************************************************************************************/
interface Direccion {
	pais: string;
	zip: number;
}

/*******************************************************************************************************/
// Definimos la Interface para crear el modelo del Objecto //
/*******************************************************************************************************/
interface Persona {
	nombre: string;
	apellido: string;
	direccion: Direccion;
}

// Las interfaces sirven para arreglar reglas de validación para los modelos de los objetos

/*******************************************************************************************************/
// Definimos nuestro componente //
/*******************************************************************************************************/
const TipoBasicos = () => {
	// Tipado de las variables básicas
	const nombre: string = 'Carlos Santander';
	const edad: number = 39;
	const estado: boolean = true;

	// Tipado de variables compuestas de objetos
	const personas_: object[] = [
		{ nombre: 'Carlos', apellido: 'Santander' },
		{ nombre: 'Pedro', apellido: 'Carrasco' }
	];
	const personas: Persona[] = [
		{ nombre: 'Carlos', apellido: 'Santander', direccion: { pais: 'Canada', zip: 22001 } },
		{ nombre: 'Pedro', apellido: 'Carrasco', direccion: { pais: 'USA', zip: 22003 } }
	];

	return (
		<>
			<h3>Tipos Básicos</h3>
			<hr />
			<h5>{`Nombre: ${nombre.toUpperCase()}`}</h5>
			<h5>{`Edad: ${edad}`}</h5>
			<h5>{`Estado: ${estado ? 'Activo' : 'Inactivo'}`}</h5>
			<ul>{JSON.stringify(personas_)}</ul>
			<ul>
				{personas.map((ele, index) => {
					return (
						<li key={index}>
							<h5>
								{ele.nombre} {ele.apellido} - {ele.direccion.pais}
							</h5>
						</li>
					);
				})}
			</ul>
		</>
	);
};

/*******************************************************************************************************/
// Exportamos el componente por defecto //
/*******************************************************************************************************/
export default TipoBasicos;
