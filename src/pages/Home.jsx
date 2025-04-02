import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold mb-4">Generation Thailand</h1>
      <h1 className="text-center text-4xl font-bold mb-4">React - Assessment</h1>
      <div className="flex mt-12 gap-20 justify-center">
        <Button
          text="User Home Sector"
          navigateTo="/UserSector"
        />
        <Button
          text="Admin Home Sector"
          navigateTo="/AdminSector"
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
