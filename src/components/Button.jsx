import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-white text-black font-bold rounded-md shadow-xl hover:bg-amber-200 transition cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;
