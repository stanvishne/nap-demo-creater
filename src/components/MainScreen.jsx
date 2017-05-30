import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';


const MainScreen = () => {
	return (
		<div className='main-screen'>
			<Header/>
			<Content/>
			<Footer/>
		</div>
	)
}

export default MainScreen;