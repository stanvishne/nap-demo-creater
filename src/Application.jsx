import React from 'react';
import {Provider} from 'react-redux';
import store from './AppStore.js';
import MainScreen from './components/MainScreen.jsx';

class Application extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<MainScreen/>
				</div>
			</Provider>		
		);
	}
}

export default Application;