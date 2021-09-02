import React, { useState, useEffect } from 'react';
import { Grow, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getPostsByContinent } from '../../actions/posts';
import Info from '../Cards/Cards';

import CountryPicker from '../CountryPicker/CountryPicker';
import ContinentPicker from '../ContinentPicker/ContinentPicker';

const Home = () => {
	//const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	const dataPosts = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	console.log('data', dataPosts.message);

	return (
		<Grow in>
			<Container>
				<Grid container justify="space-between" alignItems="stretch" spacing={3}>
					<Info data={dataPosts.message} />
				</Grid>
				<br />
				<CountryPicker data={dataPosts.message} />
				<br />
				<ContinentPicker data={dataPosts.message} />	
			</Container>
		</Grow>
	);
};

export default Home;
