import React from 'react';
import Header from '../Partials/header/header';

const Layout= (props) =>(
		<div>
			<Header />
			{props.children}
		</div>

	)

export default Layout;