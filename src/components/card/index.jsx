import React from "react";

const Card = ({team}) => {
  return (
    <div className="cursor-pointer flex flex-row mx-16 my-5 mt-0 bg-green-100 w-2/5 h-40 items-center border-green-200 border-2 rounded">
      <div className="m-0 p-0 max-w-xs">
        <img src={team.strTeamLogo} alt="Team Foto..." className="p-0 m-0 w-3/6 h-auto ml-10" />
      </div>

      <div className="flex flex-row">
        <div className="mr-5">
          <p className="font-bold text-green-800 text-9x1">Nome Time:</p>
          <p>{team.strTeam} FC</p>
        </div>
        <div className="mr-5">
          <p className="font-bold text-green-800 text-9x1">País:</p>
          <p>{team.strCountry}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
