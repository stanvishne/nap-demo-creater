
import {baseUrl, headers} from '../config/Config.js'


const ActionHelper = {
	fetchData(dispatch) {
		fetch('http://localhost:3000/test',{
			method: 'get',
			headers: headers 
		}).then(response => {
				console.log(response);
		});
	}
}

export default ActionHelper;