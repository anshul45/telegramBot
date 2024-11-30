"use client"
import Image from "next/image";
import Logo from "../public/Logo.jpg";
import NavButton from "./ui/NavButton";
import { redirect } from "next/navigation";

import { getNavLinks } from "@/utils/navLinks";

const Sidebar = () => {
 
  const navLinks = getNavLinks();

  return (
    <div className="flex-[0.2] h-screen p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Image src={Logo} alt="App Logo" width={40} height={40} className="rounded-xl" />
        <h1 className="text-2xl font-semibold">Bot Admin</h1>
      </div>
      <div>
        {navLinks.map((link, idx) => (
          <div onClick={()=> redirect(link.to)} key={idx}>
          <NavButton icon={link.icon} title={link.title}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
