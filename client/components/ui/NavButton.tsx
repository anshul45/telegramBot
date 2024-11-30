import React from "react";

interface NavButtonProps {
  icon:React.ReactNode;
  title:string;
}

const NavButton :React.FC<NavButtonProps> = ({ icon,title }) => {
  return (
    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full text-left">
      <span className="text-lg">{icon}</span>
      <h3 className="text-sm font-medium">{title}</h3>
    </button>
  );
};

export default NavButton;
