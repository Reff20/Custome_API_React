import React, { useEffect, useState } from 'react';
import Card from '../../components/card';

const Teams = () => {
	const [isName, setName] = useState();
	const [isJson, setJson] = useState();
	const [showModal, setShowModal] = useState();

	useEffect(() => {}, [isJson]);

	const searchTeam = () => {
		if (isName) {
			fetch(
				`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${isName}`
			).then((data) => {
				data.json().then((term) => {
					if (term.teams === null) {
						setShowModal(true);
					} else {
						setJson(term);
					}
				});
			});
		} else return;
	};

	return (
		<>
			<div className='overflow-x-hidden'>
				<div className='flex justify-center items-center my-5'>
					<input
						onBlur={(e) => {
							setName(e.target.value);
						}}
						type='text'
						placeholder='Team Name'
						className='bg-gray-100 mx-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					/>
					<button
						onClick={searchTeam}
						className='bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline'>
						Search
					</button>
				</div>
				<div className='flex flex-row flex-wrap justify-between'>
					{showModal ? (
						<>
							<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
								<div className='relative w-auto my-6 mx-auto max-w-3xl'>
									{/*content*/}
									<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
										{/*header*/}
										<div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
											<h3 className='text-3xl font-semibold'>Ooops!</h3>
											<button
												onClick={() => {
													setShowModal(false);
													window.location.reload();
												}}>
												<span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
													×
												</span>
											</button>
										</div>
										{/*body*/}
										<div className='relative p-6 flex-auto'>
											<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
											We didn't found this team in our Data Base. Please try again...
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
						</>
					) : (
						isJson &&
						isJson.teams.map((teams, key) => {
							return <Card team={teams} key={key} />;
						})
					)}
				</div>
			</div>
		</>
	);
};

export default Teams;
