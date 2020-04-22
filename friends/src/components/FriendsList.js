import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	state = {
		friendsList: [],
	};
};
ComponentDidMount() {
    this.getData()
}

getData =() => {
    axiosWithAuth().get('/api/data').then(res => {
        friendsList: res.data
    }).catch(err => console.log({err}))
};
