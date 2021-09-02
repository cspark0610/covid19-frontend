import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Typography } from '@material-ui/core';
import styles from '../CountryPicker/CountryPicker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByContinent } from '../../actions/posts';
import Chart from '../Chart/Chart';

const Continents = () => {
	const dispatch = useDispatch();
	const showData = useSelector((state) => state.posts.posts);
	const [selectedContinent, setSelectedContinent] = useState('');
	const handleCountryChange = (e) => {
		setSelectedContinent(e.target.value);
	};
	useEffect(() => {
		//console.log(selectedContinent);
		if (selectedContinent) {
			dispatch(getPostsByContinent(selectedContinent));
		}
	}, [dispatch, selectedContinent]);

	//console.log('showdata en continent', showData);

	let totalRecovered = showData?.reduce((acc, item) => {
		let obj = JSON.parse(item.cases);
		return acc + obj.recovered;
	}, 0);
	let totalInfected = showData?.reduce((acc, item) => {
		let obj = JSON.parse(item.cases);
		return acc + obj.active;
	}, 0);
	let totalDead = showData?.reduce((acc, item) => {
		let obj = JSON.parse(item.deaths);
		return acc + obj.total;
	}, 0);

	return (
		<>
			<Typography gutterBottom variant="h4" component="h2">
				Pick a Continent
			</Typography>
			<FormControl className={styles.formControl}>
				<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e)}>
					<option value="">Select Continent</option>
					<option value="Africa">Africa</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="North-America">North-America</option>
					<option value="Oceania">Oceania</option>
					<option value="South-America">South-America</option>
				</NativeSelect>
			</FormControl>

			<br />
			<br />
			<Chart totalInfected={totalInfected} totalRecovered={totalRecovered} totalDead={totalDead} />
		</>
	);
};

export default Continents;

