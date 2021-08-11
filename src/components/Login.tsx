/*******************************************************************************************************/
// Importamos las Dependencias //
/*******************************************************************************************************/
import { useEffect, useReducer } from 'react';

/*******************************************************************************************************/
// Definimos la interface el Estado de Autenticación //
/*******************************************************************************************************/
interface AuthState {
	validando: boolean;
	token: string | null;
	username: string;
	nombre: string;
}

/*******************************************************************************************************/
// Definimos el Estado Inicial del Reducer //
/*******************************************************************************************************/
const initialState: AuthState = {
	validando: true,
	token: null,
	username: '',
	nombre: ''
};

/*******************************************************************************************************/
// Definimos el Payload de Login //
/*******************************************************************************************************/
type LoginPayload = {
	username: string;
	nombre: string;
};

/*******************************************************************************************************/
// Definimos el tipo de la accion reducer //
/*******************************************************************************************************/
type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

/*******************************************************************************************************/
// Definimos la función del reducer //
/*******************************************************************************************************/
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case 'logout':
			return {
				validando: false,
				token: null,
				username: '',
				nombre: ''
			};
		case 'login':
			const { username, nombre } = action.payload;
			return {
				validando: false,
				token: 'abcGYiyup90123131',
				username,
				nombre
			};
		default:
			return state;
	}
};

/*******************************************************************************************************/
// Componente Login //
/*******************************************************************************************************/
const Login = () => {
	// Obtenemos los datos del reducer
	const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

	// Efecto para hacer un dispatch en los primeros 2 segundos de inicio de la aplicación
	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'logout' });
		}, 2000);
	}, []);

	// Función para salir de la aplicación
	const handleLogout = () => {
		dispatch({ type: 'logout' });
	};

	// Función para iniciar sesión en la aplicación
	const handleLogin = () => {
		dispatch({
			type: 'login',
			payload: {
				username: 'csantander',
				nombre: 'Carlos Santander'
			}
		});
	};

	// Renderizamos el componente
	return (
		<>
			<h3>Login</h3>
			<hr />
			{validando ? (
				<div className="alert alert-info">Validando ...</div>
			) : token && token !== null ? (
				<>
					<div className="alert alert-success">Autenticado como {nombre}</div>
					<hr />
					<button className="btn btn-danger" onClick={handleLogout}>
						Salir
					</button>
				</>
			) : (
				<>
					<div className="alert alert-danger">No identificado</div>
					<hr />
					<button className="btn btn-primary" onClick={handleLogin}>
						Iniciar
					</button>
				</>
			)}
		</>
	);
};

/*******************************************************************************************************/
// Exportamos el componente //
/*******************************************************************************************************/
export default Login;
