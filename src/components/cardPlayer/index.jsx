import React, { useState } from 'react';

const CardPlayer = ({ player }, key) => {
	const [showPlayers, setShowPlayers] = useState(false);
	return (
		<div
			onClick={() => setShowPlayers(!showPlayers)}
			className='cursor-pointer flex flex-row mx-16 my-5 mt-0 bg-green-100 w-2/5 h-40 items-center border-green-200 border-2 rounded'>
			<div className='m-0 p-0 max-w-xs'>
				<img
					src={player.strCutout}
					alt='Player without pic'
					className='p-0 m-0 w-3/6 h-auto ml-10'
				/>
			</div>
			<div className='flex flex-row'>
				<div className='mr-5'>
					<p className='font-bold text-green-800 text-9x1'>Player ID:</p>
					<p>{player.idPlayer}</p>
				</div>
				<div className='mr-5'>
					<p className='font-bold text-green-800 text-9x1'>Player Name:</p>
					<p>{player.strPlayer}</p>
				</div>
				<div className='mr-5'>
					<p className='font-bold text-green-800 text-9x1'>Player Team:</p>
					<p>{player.strTeam}</p>
				</div>
			</div>
			{showPlayers && (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl h-screen'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>{player.strPlayer}</h3>
									<button onClick={() => setShowPlayers(!showPlayers)}>
										<span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
											x
										</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative p-6 flex-auto'>
									<img
										src={player.strCutout}
										alt='Player without pic'
										className='p-0 m-0 w-2/5 h-auto ml-10'
									/>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Player Name:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{player.strPlayer}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Height:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{player.strHeight}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Weight:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{player.strWeight}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Position:
									</p>
									<p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
										{player.strPosition}
									</p>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Social Medias:
									</p>
									<div>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strInstagram ? (
												<a
													href={`https://${player.strInstagram}`}
													target='_blank'
													rel='noopener noreferrer'>{`Instagram: ${player.strInstagram}`}</a>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strFacebook ? (
												<a
													href={`https://${player.strFacebook}`}
													target='_blank'
													rel='noopener noreferrer'>{`Facebook: ${player.strFacebook}`}</a>
											) : (
												<></>
											)}
										</p>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strTwitter ? (
												<a
													href={`https://${player.strTwitter}`}
													target='_blank'
													rel='noopener noreferrer'>{`Twitter: ${player.strTwitter}`}</a>
											) : (
												<></>
											)}
										</p>
									</div>
									<p className='my-4 text-blueGray-800 text-lg font-bold leading-relaxed'>
										Galery:
									</p>
									<div>
										<p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strThumb ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strThumb}
												/>
											) : (
												<></>
											)}
										</p>
                                        <p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strCutout ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strCutout}
												/>
											) : (
												<></>
											)}
										</p>
                                        <p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strRender ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strRender}
												/>
											) : (
												<></>
											)}
										</p>
                                        <p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strBanner ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strBanner}
												/>
											) : (
												<></>
											)}
										</p>
                                        <p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strFanart1 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strFanart1}
												/>
											) : (
												<></>
											)}
										</p>
                                        <p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strFanart2 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strFanart2}
												/>
											) : (
												<></>
											)}
										</p>
                                        <p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strFanart3 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strFanart3}
												/>
											) : (
												<></>
											)}
										</p>
                                        <p className='my-4 text-green-800 text-lg leading-relaxed'>
											{player.strFanart4 ? (
												<img
													alt=''
													className='max-w-lg min-w-lg'
													src={player.strFanart4}
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

export default CardPlayer;
