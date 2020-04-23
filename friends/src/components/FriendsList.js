import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';
import AddFriend from './AddFriend';

const FriendsList = (props) => {
	let history = useHistory();
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		axiosWithAuth()
			.get('/friends')
			.then((res) => setFriends(res.data))
			.catch((err) => console.log(err));
	};

	const handleClick = (props) => {
		console.log('These are the props', props);
		//props.history.push('/friends');
		history.push('/friends');
	};

	return (
		<div className="friendlist">
			{friends.map((friend) => (
				<Friend key={friend.id} friend={friend} />
			))}
			<AddFriend setFriends={setFriends} />
			{/* <button className="add-friend" onClick={handleClick}>
				Add Friend
			</button> */}
		</div>
	);
};

export default FriendsList;
