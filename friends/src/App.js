import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Friend from './components/Friend';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute exact path="/friends" component={Friend} />
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
				{/* <Login /> */}
			</div>
		</Router>
	);
}

export default App;
