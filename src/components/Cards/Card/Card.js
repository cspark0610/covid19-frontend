import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './Card.module.css';

const CardComponent = ({ className, cardTitle, value, cardSubtitle, lastUpdate }) => (
	<Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
		<CardContent>
			<Typography color="textSecondary" gutterBottom>
				{cardTitle}
			</Typography>
			<Typography variant="h5" component="h2">
				{value}
			</Typography>
			<Typography color="textSecondary">{lastUpdate}</Typography>
			<Typography variant="body2" component="p">
				{cardSubtitle}
			</Typography>
		</CardContent>
	</Grid>
);

export default CardComponent;
