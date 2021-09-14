import React, { useEffect, useState } from 'react';
import Card from '../../components/card';

const Teams = () => {
	const [isName, setName] = useState();
	const [isJson, setJson] = useState();

	useEffect(() => {
		console.log(isJson);
	}, [isJson]);

	const searchTeam = () => {
		if (isName) {
			fetch(
				`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${isName}`
			).then((data) => {
				data.json().then((term) => {
					setJson(term);
				});
			});
		} else return;
	};

	const clearTeam = () => {
		setJson();
		setName('');
	};

	//   const renderTeams = () => {
	//     if (isJson) {
	//       for (let i; i < isJson.teams.length; i++) {
	//         return (
	//           <Card
	//             tPhoto={isJson.teams[i].strTeamLogo}
	//             tName={isJson.teams[i].strTeam}
	//             tCountry={isJson.teams[i].strCountry}
	//           />
	//         );
	//       }
	//     } else {
	//       return <div></div>;
	//     }
	//   };

	return (
		<>
			<div className='overflow-x-hidden'>
				<div className='flex justify-center items-center my-5'>
					<input
						value={isName}
						onBlur={(e) => {
							setName(e.target.value);
						}}
						type='text'
						placeholder='Team Name'
						className='bg-gray-100 mx-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					/>
					<button
						onClick={searchTeam}
						className='bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline'
					>
						Search
					</button>
					<button
						onClick={clearTeam}
						className='bg-green-700 hover:bg-green-900 text-white font-bold ml-1 py-2 px-3 rounded focus:outline-none focus:shadow-outline'
					>
						Clear
					</button>
				</div>
				<div className='flex flex-row flex-wrap justify-between'>
					{isJson &&
						isJson.teams.map((teams) => {
							return <Card team={teams} />;
						})}
				</div>
			</div>
		</>
	);
};

export default Teams;
