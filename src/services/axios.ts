/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import axios from 'axios';

/*******************************************************************************************************/
// Función para conectarnos a un endpoint //
/*******************************************************************************************************/
export const axiosData = async (url: string = '', method: string = 'GET', data: object = {}) => {
	// Definimos las opciones
	let options: object = {
		method,
		url
	};
	if (method !== 'GET') {
		options = {
			method,
			url,
			data
		};
	}
	try {
		const response = await axios(options);
		return {
			status: true,
			data: response.data
		};
	} catch (error) {
		console.log(error);
		return {
			status: false,
			data: null
		};
	}
};
