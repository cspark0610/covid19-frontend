import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
//const AUTH = 'AUTH';

export const login = (formData, router) => async (dispatch) => {
	try {
		const { dataUser } = await api.login(formData);
		//console.log('data in action auth.js', dataUser);

		dispatch({ type: AUTH, payload: dataUser });
		router.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const signup = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);
		dispatch({ type: AUTH, data });
		router.push('/');
	} catch (error) {
		console.log(error);
	}
};
