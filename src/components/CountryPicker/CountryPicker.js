import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Typography } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';
import Chart from '../Chart/Chart';

const Countries = ({ data }) => {
	const dispatch = useDispatch();
	const showData = useSelector((state) => state.posts.posts);
	const [selectedCountry, setSelectedCountry] = useState('');
	const handleCountryChange = (e) => {
		setSelectedCountry(e.target.value);
	};
	useEffect(() => {
		//console.log(selectedCountry);
		if (selectedCountry) {
			dispatch(getPostsBySearch(selectedCountry));
		}
	}, [dispatch, selectedCountry]);

	const showDataCases = showData ? JSON.parse(showData['0'].cases) : { active: 0, recovered:0, critical: 0 };
	const showDataDeaths = showData ? JSON.parse(showData['0'].deaths) : { total: 0 };

	const totalInfected = showDataCases.active + showDataCases.critical;
	const totalRecovered = showDataCases.recovered;
	const totalDead = showDataDeaths.total;

	return (
		<>
			<Typography gutterBottom variant="h4" component="h2">
				Pick a Country
			</Typography>
			<FormControl className={styles.formControl}>
				<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e)}>
					<option value="">Select Country</option>
					{data &&
						data.map((item, i) => (
							<option key={i} value={item.country}>
								{item.country}
							</option>
						))}
				</NativeSelect>
			</FormControl>

			<br />
			<br />
			<Chart totalInfected={totalInfected} totalRecovered={totalRecovered} totalDead={totalDead} />
		</>
	);
};

export default Countries;

