import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
//import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const location = useLocation();
	const history = useHistory();
	const classes = useStyles();

	const logout = () => {
		localStorage.clear();
		history.push('/auth');
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token || null;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Toolbar className={classes.toolbar}>
				<div className={classes.profile}>
					<Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
						{user?.result.name.charAt(0)}
					</Avatar>
					<Typography className={classes.userName} variant="h6">
						{user?.result.name}
					</Typography>
					<Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
						Logout
					</Button>
					<Button component={Link} to="/auth" variant="contained" color="primary">
						Login
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;


