import React from "react";

const AdminSector = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Generation Thailand</h1>
      <h1 className="text-4xl font-bold mb-4">Home - Admin Sector</h1>
      <div className="flex mt-12 gap-20 justify-center">
      <button
        className="px-4 py-2 bg-white text-black font-bold rounded-md shadow-xl hover:bg-amber-200 transition cursor-pointer"
      >
        User Home Sector
      </button>
      <button
        className="px-4 py-2 bg-white text-black font-bold rounded-md shadow-xl hover:bg-amber-200 transition cursor-pointer"
      >
        Admin Home Sector
      </button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AdminSector;