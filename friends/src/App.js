import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<Router>
			<div className="App">
				<h1>Friends</h1>
				<Link className="link" to="/login">
					Login
				</Link>
				<Link className="link" to="/friends">
					Friends Page
				</Link>
			</div>
			<Switch>
				<ProtectedRoute path="/friends" component={FriendsList} />
				<Route path="/login" component={Login} />
				<Route component={Login} />

				<Route path="/addfriend" component={AddFriend} />
			</Switch>
		</Router>
	);
}

export default App;
