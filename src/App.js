import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
	return (
		<BrowserRouter>
			<Container maxWidth="xl">
				<Navbar />
				<Switch>
					<Route path="/" exact component={() => <Redirect to="/auth" />} />
					<Route path="/posts/statistics" exact component={Home} />
					<Route path="/auth" exact component={Auth} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
