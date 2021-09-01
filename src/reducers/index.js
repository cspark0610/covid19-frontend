import { combineReducers } from 'redux';

import postsReducer from './posts.js';
import authReducer from './auth.js';

export const reducers = combineReducers({ posts: postsReducer, auth: authReducer });
