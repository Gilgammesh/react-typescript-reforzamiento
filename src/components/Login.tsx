/*******************************************************************************************************/
// Importamos las Dependencias //
/*******************************************************************************************************/
import { useReducer } from 'react';

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
// Definimos el tipo de la accion reducer //
/*******************************************************************************************************/
type AuthAction = {
	type: 'logout';
	payload: any;
};

/*******************************************************************************************************/
// Definimos la función del reducer //
/*******************************************************************************************************/
const authReducer = (state: AuthState, action: AuthAction): AuthState => {};

/*******************************************************************************************************/
// Componente Login //
/*******************************************************************************************************/
const Login = () => {
	const [state, dispatch] = useReducer(reducer, initialState, init);

	// Renderizamos el componente
	return (
		<>
			<h3>Login</h3> <div className="alert alert-info">Validando ...</div>
			<div className="alert alert-danger">No identificado ...</div>
			<div className="alert alert-success">Autenticado ...</div>
			<button className="btn btn-primary">Iniciar</button>
			{'   '}
			<button className="btn btn-danger">Salir</button>
		</>
	);
};

/*******************************************************************************************************/
// Exportamos el componente //
/*******************************************************************************************************/
export default Login;
