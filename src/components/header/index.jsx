import React, { useState } from "react";

const Header = () => {
  const [isName, setName] = useState();

  //Teste
  // const [isId, setId] = useState();

  return (
    <div className="flex flex-row items-center w-screen h-16 bg-green-200 border-b-8 border-green-300 text-center justify-centertext-center justify-center">
      <h1 className="font-mono text-lg font-bold text-green-800 cursor-default mx-2">
        Search Soccer Team
      </h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        className="mx-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={() => {
          fetch(
            `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${isName}`
          )
            .then((res) => res.json())
            .then((data) => {
              let dataT = data.teams;
              for (let i = 0; i < dataT.length; i++) {
                if (
                  dataT[i] !== undefined ||
                  dataT[i] !== null ||
                  dataT[i] !== ""
                ) {
                  console.log(dataT[i]);
                  if (
                    dataT[i].idTeam !== undefined ||
                    dataT[i].idTeam !== null ||
                    dataT[i].idTeam !== ""
                  ) {
                    console.log(dataT[i].idTeam);
                  } else {
                    return;
                  }
                }else{
                  return
                }
              }
            });
        }}
        className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </div>
  );
};

export default Header;
