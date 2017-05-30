import {actionTypes} from './AppConstants.js';

export default (state = null, action) => {
	switch (action.type) {
		case actionTypes.LOADING_PROGRESS:
			return action.progress;
		default: 
			return state;				
	}	
}

