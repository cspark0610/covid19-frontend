import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ totalInfected, totalRecovered, totalDead }) => {
	return (
		<div className={styles.container}>
			<Bar
				data={{
					labels: [`Infected: ${totalInfected}`, `Recovered: ${totalRecovered}`, `Dead: ${totalDead}`],
					datasets: [
						{
							label: 'People',
							backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
							data: [totalInfected, totalRecovered, totalDead],
						},
					],
				}}
				options={{
					legend: { display: false },
					title: { display: true, text: `Current state in pais` },
				}}
			/>
		</div>
	);
};
export default Chart;
