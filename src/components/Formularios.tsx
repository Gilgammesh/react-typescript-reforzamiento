/*******************************************************************************************************/
// Importamos las librerias //
/*******************************************************************************************************/
import { useRef } from 'react';
import { useForm } from '../hooks/useForm';

/*******************************************************************************************************/
// Definimos la interfaz para formulario //
/*******************************************************************************************************/
interface Formulario {
	email: string;
	password: string;
}

/*******************************************************************************************************/
// Definimos el componente de Formularios //
/*******************************************************************************************************/
const Formularios = () => {
	// Definimos el estado inicial del formulario
	const initialForm: Formulario = {
		email: '',
		password: ''
	};

	// Llamamos al Hook personalizado de formularios
	const { formValues, handleInputChange } = useForm(initialForm);
	// Obtenemos los datos del formulario
	const { email, password } = formValues;

	// Creamos una referencia del formulario
	const refForm = useRef<HTMLFormElement>(null);

	// Función cuando se envia el formulario
	const onSubmit = () => {
		alert('se envio el formulario!!!');
		refForm.current?.reset();
	};

	// Renderizamos el componente
	return (
		<>
			<h3>Formularios</h3>
			<form ref={refForm} onSubmit={onSubmit}>
				<div className="mb-3">
					<label htmlFor="inputEmail" className="form-label">
						Correo
					</label>
					<input
						id="inputEmail"
						type="email"
						className="form-control"
						name="email"
						value={email}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="inputPassword" className="form-label">
						Contraseña
					</label>
					<input
						id="inputPassword"
						type="password"
						className="form-control"
						name="password"
						value={password}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Enviar
				</button>
			</form>
		</>
	);
};
export default Formularios;
