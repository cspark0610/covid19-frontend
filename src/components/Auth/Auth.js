import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { login, signup } from '../../actions/auth';
//import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	//const dataAuth = useSelector((state) => state.auth);

	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(!showPassword);

	const switchMode = () => {
		setForm(initialState);
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignup) {
			dispatch(signup(form, history));
		} else {
			dispatch(login(form, history));
		}
	};

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={6}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					{isSignup ? 'Sign up' : 'Login'}
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
								<Input name="lastName" label="Last Name" handleChange={handleChange} half />
							</>
						)}
						<Input name="email" label="Email Address" handleChange={handleChange} type="email" />
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
						)}
					</Grid>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default SignUp;
