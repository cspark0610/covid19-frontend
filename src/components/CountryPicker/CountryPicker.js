import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';

const Countries = ({ data }) => {
	const dispatch = useDispatch();
	const [country, setCountry] = useState('');
	const handleCountryChange = (e) => {
		setCountry(e.target.value);
		//console.log(country);

		//dispatch(getPostsBySearch('Laos')); working
		dispatch(getPostsBySearch(country));
	};
	//see why onCHange event is not triggered in NativeSelect material-ui tag
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e)}>
				<option value="">Select Country</option>
				{data &&
					data.map((item, i) => (
						<option key={i} value={country}>
							{item.country}
						</option>
					))}
			</NativeSelect>
		</FormControl>
	);
};

export default Countries;
