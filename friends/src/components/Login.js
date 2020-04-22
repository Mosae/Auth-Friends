import React from 'react';
//import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: '',
		},
	};

	render() {
		return (
			<div>
				<form>
					<input type="text" name="username" placeholder="Username" />
				</form>
			</div>
		);
	}
}

export default Login;
