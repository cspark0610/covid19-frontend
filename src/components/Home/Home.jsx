import React, { useEffect } from 'react';
import { Grow, Container, Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Info from '../Cards/Cards';

import CountryPicker from '../CountryPicker/CountryPicker';
import ContinentPicker from '../ContinentPicker/ContinentPicker';
import { synchronize } from '../../actions/posts';

const Home = () => {
	//const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	const dataPosts = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	const handleClick = () => {
		dispatch(synchronize());
	};

	console.log('data', dataPosts.message);

	return (
		<>
			<Button variant="contained" color="secondary" onClick={handleClick}>
				Synchronize
			</Button>
			<Grow in>
				<Container>
					<Grid container justify="space-between" alignItems="stretch" spacing={3}>
						<Info data={dataPosts.message} />
					</Grid>
					<br />
					<CountryPicker data={dataPosts.message} />
					<br />
					<ContinentPicker />
				</Container>
			</Grow>
		</>
	);
};

export default Home;

