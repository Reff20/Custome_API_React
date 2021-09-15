import React from 'react';
import stadium from '../../utils/stadium.jpg'

const Card = ({ team }, key) => {
	const [showResult, setResult] = React.useState(false); 

	return (
		<div
			onClick={() => setResult(!showResult)}
			className='cursor-pointer flex flex-row mx-16 my-5 mt-0 bg-green-100 w-2/5 h-40 items-center border-green-200 border-2 rounded'>
			<div className='m-0 p-0 max-w-xs'>
				<img
					src={team.strTeamLogo}
					alt='Team without logo'
					className='p-0 m-0 w-3/6 h-auto ml-10'
				/>
			</div>

			<div className='flex flex-row'>
				<div className='mr-5'>
					<p className='font-bold text-green-800 text-9x1'>Nome Time:</p>
					<p>{team.strTeam}</p>
				</div>
				<div className='mr-5'>
					<p className='font-bold text-green-800 text-9x1'>País:</p>
					<p>{team.strCountry}</p>
				</div>
			</div>
			{showResult && (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>{team.strTeam} - {team.strCountry}</h3>
									<button onClick={() => setResult(!showResult)}>
										<span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
											x
										</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative p-6 flex-auto'>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										League:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strLeague}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Sport:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strSport}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Stadium:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strStadium ? team.strStadium : "No Staduim"}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Description:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strStadiumDescription ? team.strStadiumDescription : "No Description"}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Stadium Photo:
									</p>
									<img alt="Stadium Name" src={team.strStadiumThumb ? team.strStadiumThumb : stadium} />
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			)}
		</div>
	);
};

export default Card;
