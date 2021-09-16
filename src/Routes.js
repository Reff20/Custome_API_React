import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Teams from './pages/teams';
import Players from './pages/players';

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<Route component={Teams} path='/' exact />
				<Route component={Players} path='/players' exact />
			</BrowserRouter>
		</>
	);
};

export default Routes;
