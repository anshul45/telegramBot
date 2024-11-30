import TitleCard from "@/components/TitleCard";
import ToggleUsers from "@/components/ToggleUsers";
import UsersCard from "@/components/UsersCard";
import UserTable from "@/components/UserTable";
import { CiSearch } from "react-icons/ci";

export default function Home() {



  return (
    <div className="flex-[0.9] p-8 w-full">
     <TitleCard title="All Users" desc="Find all users here."/>
      <div className="bg-white p-3  rounded-lg flex gap-5 mt-3 w-fit">
      <UsersCard title="Subscribed Users" count={10}/>
      <UsersCard title="Blocked Users" count={5}/>
      </div>
     
     <ToggleUsers toggles={["View all", "Blocked"]}/>

      <UserTable/>
      
    </div>
  );
}
