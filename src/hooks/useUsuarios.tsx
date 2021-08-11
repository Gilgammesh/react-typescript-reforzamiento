/*******************************************************************************************************/
// Importamos las librerias //
/*******************************************************************************************************/
import { useState, useEffect } from 'react';
import { Usuario } from '../interfaces/reqRes';
import { axiosData } from '../services/axios';

/*******************************************************************************************************/
// Definimos el Hook personalizado de Usuarios //
/*******************************************************************************************************/
export const useUsuarios = () => {
	// Estado inicial de la página
	const [page, setPage] = useState<number>(1);

	// Estado de carga de la tabla
	const [loading, setLoading] = useState<boolean>(true);

	// Estado inicial de la lista de usuarios
	const [users, setUsers] = useState<Usuario[]>([]);

	// Efecto para obtener los usuarios por página
	useEffect(() => {
		// Inicializamos el efecto
		let mounted = true;
		// URL del Endpoint
		const url: string = `https://reqres.in/api/users?page=${page}`;
		// Función para obtener los usuarios
		const getUsers = async () => {
			// Inicializamos la carga
			setLoading(true);
			// Obtenemos el resultado usando axios
			const result = await axiosData(url);
			// Si existe un resultado exitoso
			if (result.status && mounted) {
				// Finalizamos la carga
				setLoading(false);
				// Guardamos los usuario
				setUsers(result.data.data);
			}
		};
		// Obtenemos los usuarios
		getUsers();
		// Limpiamos el efecto
		return () => {
			mounted = false;
		};
	}, [page]);

	// Función para cambiar a la página anterior
	const handleChangePagePrev = () => {
		setPage(page - 1);
	};

	// Función para cambiar a un página específica
	const handleChangePage = (n: number) => {
		setPage(n);
	};

	// Función para cambiar a la página anterior
	const handleChangePageNext = () => {
		setPage(page + 1);
	};

	return {
		page,
		loading,
		users,
		handleChangePagePrev,
		handleChangePage,
		handleChangePageNext
	};
};
