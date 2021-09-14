import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='flex flex-row items-center w-screen h-16 bg-green-200 border-b-8 border-green-300 text-center justify-around'>
			<h1 className='font-mono text-lg font-bold text-green-800 cursor-default mx-2'>
				Search Soccer Team
			</h1>
			<div>
				<BrowserRouter>
					<Link className='mx-4 ' to='/players'>
						Players
					</Link>
					<Link className='mx-4' to='/players'>
						oi
					</Link>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default Header;
