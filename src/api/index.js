import axios from 'axios';

const url = 'http://localhost:5000';
const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
	}
	//console.log(req);
	return req;
});

export const syncPosts = () => API.get('/posts/sync');
export const fetchPosts = () => API.get('/posts/statistics');
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/statistics/search?country=${searchQuery}`);
export const fetchPostsByContinent = (searchQuery) => API.get(`/posts/statistics/continent?continent=${searchQuery}`);

export const login = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);
