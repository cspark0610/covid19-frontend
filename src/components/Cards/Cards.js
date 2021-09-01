import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';
import Chart from '../Chart/Chart.js';

const Info = ({ data }) => {
	let totalRecovered = data?.reduce((acc, item) => {
		let obj = JSON.parse(item.cases);
		return acc + obj.recovered;
	}, 0);
	let totalInfected = data?.reduce((acc, item) => {
		let obj = JSON.parse(item.cases);
		return acc + obj.active;
	}, 0);
	let totalDead = data?.reduce((acc, item) => {
		let obj = JSON.parse(item.deaths);
		return acc + obj.total;
	}, 0);
	let lastUpdate;
	lastUpdate = lastUpdate ? new Date(data[0]?.time).toDateString() : Date(Date.now()).toString().split('GMT')[0];

	return (
		<div className={styles.container}>
			<Typography gutterBottom variant="h4" component="h2">
				Global Stats
			</Typography>
			<Grid container spacing={3} justify="center">
				<CardComponent
					className={styles.infected}
					cardTitle="Infected"
					value={totalInfected}
					lastUpdate={lastUpdate}
					cardSubtitle="Number of active cases from COVID-19."
				/>
				<CardComponent
					className={styles.recovered}
					cardTitle="Recovered"
					value={totalRecovered}
					lastUpdate={lastUpdate}
					cardSubtitle="Number of recoveries from COVID-19."
				/>
				<CardComponent
					className={styles.deaths}
					cardTitle="Deaths"
					value={totalDead}
					lastUpdate={lastUpdate}
					cardSubtitle="Number of deaths caused by COVID-19."
				/>
			</Grid>
			<br />
			<br />
			<Chart totalInfected={totalInfected} totalRecovered={totalRecovered} totalDEad={totalDead} />
		</div>
	);
};

export default Info;
