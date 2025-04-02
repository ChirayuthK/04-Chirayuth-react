import React from "react";

const UserSector = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Generation Thailand</h1>
      <h1 className="text-4xl font-bold mb-4">Home - User Sector</h1>
      <div className="flex mt-12 gap-20 justify-center">
        <button className="px-4 py-2 bg-white text-black font-bold rounded-md shadow-xl hover:bg-amber-200 transition cursor-pointer">
          User Home Sector
        </button>
        <button className="px-4 py-2 bg-white text-black font-bold rounded-md shadow-xl hover:bg-amber-200 transition cursor-pointer">
          Admin Home Sector
        </button>
      </div>
      <br />
      <br />
      <table className="w-full border border-grey-100">
        <tbody>
          <tr className="bg-gray-200">
            <td className="border border-gray-400 px-2 py-2">Name</td>
            <td className="border border-gray-400 px-2 py-2">Last Name</td>
            <td className="border border-gray-400 px-2 py-2">Position</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-2 h-8"></td>
            <td className="border border-gray-400 px-2 py-2"></td>
            <td className="border border-gray-400 px-2 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-2 h-8"></td>
            <td className="border border-gray-400 px-2 py-2"></td>
            <td className="border border-gray-400 px-2 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-2 h-8"></td>
            <td className="border border-gray-400 px-2 py-2"></td>
            <td className="border border-gray-400 px-2 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserSector;
