import axios from 'axios';
import { useHistory } from 'react-router-dom';

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: 'nm1KhaZy4XOB76Bxh7Bc6dzEezncr1qCICRhsaRt',
			client_secret:
				'UEp81dQyfIQuFgsZCHZ7JcO2ouJ4esDIUZ0IHFTTAs2xH2Q7VSeYVRnpgtvsgeicY7Az1il4xfw7WKdpQgS9meJnrnlD3f4YFALJu7RaZumoBxvwQL5VPAdjEX3mJPSs',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default facebookLogin;