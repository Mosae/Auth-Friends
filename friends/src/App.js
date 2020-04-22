import React from 'react';
import { BrowserRoute as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<link to="protected">Protected Page</link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute exact path="/protected" component={FriendsList} />
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
				{/* <Login /> */}
			</div>
		</Router>
	);
}

export default App;
