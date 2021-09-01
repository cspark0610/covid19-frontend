import * as api from '../api/index';
import { FETCH_ALL, FETCH_BY_SEARCH } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		//console.log('data in posts.actions', data);
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
	try {
		const {
			data: { data },
		} = await api.fetchPostsBySearch(searchQuery);

		console.log('esto', await api.fetchPostsBySearch(searchQuery));
		dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
	} catch (error) {
		console.log(error);
	}
};
export const getPostsByContinent = (searchQuery) => async (dispatch) => {
	try {
		const {
			data: { data },
		} = await api.fetchPostsByContinent(searchQuery);

		dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
	} catch (error) {
		console.log(error);
	}
};
