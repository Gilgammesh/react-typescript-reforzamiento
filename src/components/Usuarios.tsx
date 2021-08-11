/*******************************************************************************************************/
// Importamos las librerias //
/*******************************************************************************************************/
import clsx from 'clsx';
import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

/*******************************************************************************************************/
// Definimos el componente de usuarios //
/*******************************************************************************************************/
const Usuarios = () => {
	// Llamamos nuestro hook personalizado de usuarios
	const { page, loading, users, handleChangePagePrev, handleChangePage, handleChangePageNext } = useUsuarios();

	// Función para renderizar el usuario
	const renderUsuario = (usuario: Usuario) => {
		// Obtenemos los datos del usuario
		const { id, avatar, first_name, last_name, email } = usuario;
		// Renderizamos el item
		return (
			<tr key={`${id}`}>
				<td>{id}</td>
				<td>
					<img src={avatar} className="img-thumbnail" style={{ width: 40, borderRadius: 20, padding: 2 }} alt={`${id}`} />
				</td>
				<td>{first_name}</td>
				<td>{last_name}</td>
				<td>{email}</td>
			</tr>
		);
	};

	// Componente de carga de la tabla
	const Cargando = () => {
		return (
			<div className="text-center">
				<div className="spinner-grow text-primary" role="status"></div>
				<div className="spinner-grow text-secondary" role="status"></div>
				<div className="spinner-grow text-success" role="status"></div>
				<div className="spinner-grow text-danger" role="status"></div>
				<div className="spinner-grow text-warning" role="status"></div>
				<div className="spinner-grow text-info" role="status"></div>
			</div>
		);
	};

	// Renderizamos el componente
	return (
		<>
			<h3>Usuarios</h3>
			<table className="table table-hover">
				<thead className="table-light">
					<tr>
						<th>#</th>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Correo</th>
					</tr>
				</thead>
				{loading ? <Cargando /> : <tbody>{users.map(usuario => renderUsuario(usuario))}</tbody>}
			</table>
			<nav aria-label="navegacion tabla">
				<ul className="pagination justify-content-end">
					<li className={clsx('page-item', page === 1 ? 'disabled' : '')}>
						<a className="page-link" onClick={handleChangePagePrev} href="/#">
							Anterior
						</a>
					</li>
					<li className={clsx('page-item', page === 1 ? 'active' : '')}>
						<a className="page-link" onClick={() => handleChangePage(1)} href="/#">
							1
						</a>
					</li>
					<li className={clsx('page-item', page === 2 ? 'active' : '')}>
						<a className="page-link" onClick={() => handleChangePage(2)} href="/#">
							2
						</a>
					</li>
					<li className={clsx('page-item', page === 2 ? 'disabled' : '')}>
						<a className="page-link" onClick={handleChangePageNext} href="/#">
							Siguiente
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

/*******************************************************************************************************/
// Exportamos //
/*******************************************************************************************************/
export default Usuarios;
