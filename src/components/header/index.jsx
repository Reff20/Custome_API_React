import React from 'react';

const Header = () => {
	return (
		<div className='flex flex-row items-center w-screen h-16 bg-green-200 border-b-8 border-green-300 text-center justify-around'>
			<h1 className='font-mono text-lg font-bold text-green-800 cursor-default mx-2'>
				Search Soccer Team
			</h1>
			<div>
				<a className='mx-4 font-bold text-green-800' href='/players'>
					Search Players
				</a>
				<a className='mx-4 font-bold text-green-800' href='/'>
					Search Teams
				</a>
			</div>
		</div>
	);
};

export default Header;
