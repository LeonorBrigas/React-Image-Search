import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 1Yei5de4IDyws5gzlL4KVY8shWOTSt06T3w7wKBXzsM'
	}
});
