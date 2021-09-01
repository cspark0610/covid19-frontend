const FETCH_ALL = 'FETCH_ALL';
const FETCH_BY_SEARCH = 'FETCH_BY_SEARCH';

const postsReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case FETCH_BY_SEARCH:
			return { ...state, posts: action.payload.data };
		default:
			return state.posts;
	}
};
export default postsReducer;
