import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
//const AUTH = 'AUTH';

export const login = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.login(formData);
		//console.log('data in action auth.js', data);
		router.push('/posts/statistics');
		dispatch({ type: AUTH, payload: data });
		
	} catch (error) {
		console.log(error);
	}
};

export const signup = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);
		router.push('/posts/statistics');
		dispatch({ type: AUTH, data });
		
	} catch (error) {
		console.log(error);
	}
};
