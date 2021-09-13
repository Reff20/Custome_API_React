import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row items-center w-screen h-16 bg-green-200 border-b-8 border-green-300 text-center justify-centertext-center justify-center">
      <h1 className="font-mono text-lg font-bold text-green-800 cursor-default mx-2">
        Search Soccer Team
      </h1>
      <input
        type="text"
        className="mx-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
        Search
      </button>
    </div>
  );
};

export default Header;
