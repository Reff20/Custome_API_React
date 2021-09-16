import React from 'react';
import stadium from '../../utils/stadium.jpg';

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
					<p className='font-bold text-green-800 text-9x1'>Team Name:</p>
					<p>{team.strTeam}</p>
				</div>
				<div className='mr-5'>
					<p className='font-bold text-green-800 text-9x1'>Country:</p>
					<p>{team.strCountry}</p>
				</div>
			</div>
			{showResult && (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl h-screen'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>
										{team.strTeam} - {team.strCountry}
									</h3>
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
										Stadium Description:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strStadiumDescription
											? team.strStadiumDescription
											: 'No Description'}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Stadium:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strStadium ? team.strStadium : 'No Staduim'}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Stadium Capacity:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.intStadiumCapacity}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Stadium Location:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strStadiumLocation}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Stadium Photo:
									</p>
									<img
										alt='Stadium Name'
										src={team.strStadiumThumb ? team.strStadiumThumb : stadium}
									/>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Team Description:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strDescriptionEN}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Country:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{team.strCountry}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Youtube:
									</p>
									<p className='my-4 text-green-800 text-lg leading-relaxed'>
										<a
											href={`https://${team.strYoutube}`}
											target='_blank'
											rel='noopener noreferrer'>{`Youtube: ${team.strTeam}`}</a>
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Social Medias:
									</p>
									<p className='my-4 text-green-800 text-lg leading-relaxed'>
										{team.strFacebook ? (
											<a
												href={`https://${team.strFacebook}`}
												target='_blank'
												rel='noopener noreferrer'>{`Facebook: ${team.strTeam}`}</a>
										) : (
											<></>
										)}
									</p>
									<p className='my-4 text-green-800 text-lg leading-relaxed'>
										{team.strInstagram ? (
											<a
												href={`https://${team.strInstagram}`}
												target='_blank'
												rel='noopener noreferrer'>{`Instagram: ${team.strInstagram}`}</a>
										) : (
											<></>
										)}
									</p>
									<p className='my-4 text-green-800 text-lg leading-relaxed'>
										{team.strTwitter ? (
											<a
												href={`https://${team.strTwitter}`}
												target='_blank'
												rel='noopener noreferrer'>{`Twitter: ${team.strTwitter}`}</a>
										) : (
											<></>
										)}
									</p>

									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Photos and Arts:
									</p>
									<div>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamBadge ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={team.strTeamBadge}
												/>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamJersey ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={team.strTeamJersey}
												/>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamLogo ? (
												<img
													alt=''
													className='max-w-lg w-full'
													src={team.strTeamLogo}
												/>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamFanart1 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={team.strTeamFanart1}
												/>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamFanart2 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={team.strTeamFanart2}
												/>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamFanart3 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={team.strTeamFanart3}
												/>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamFanart4 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={team.strTeamFanart4}
												/>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{team.strTeamBanner ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={team.strTeamBanner}
												/>
											) : (
												<></>
											)}
										</p>
									</div>
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
