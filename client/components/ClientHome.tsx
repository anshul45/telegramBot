"use client";
import React, { useState } from 'react'
import TitleCard from './TitleCard'
import UsersCard from './UsersCard'
import ToggleUsers from './ToggleUsers'
import UserTable from './UserTable'
import { UserResponse } from '@/utils/types';

interface ClientHomeProps {
  usersData:UserResponse[];
  blockedUsersData:UserResponse[];
}

const ClientHome : React.FC<ClientHomeProps> = ({usersData,blockedUsersData}) => {
    const[users,setUsers] = useState<UserResponse[]>(usersData);
    const[blockedUsers,setBlockedUsers] = useState<UserResponse[]>(blockedUsersData);
    const [selected, setSelected] = useState<string>("View all");
    const flag = "all";
  return (
    <div className="flex-[0.9] py-6 px-8 w-full h-screen">
     <TitleCard title="All Users" desc="Find all users here."/>
      <div className="bg-white p-3  rounded-lg flex gap-5 mt-3 w-fit">
      <UsersCard title="Subscribed Users" count={users.length}/>
      <UsersCard title="Blocked Users" count={blockedUsers.length}/>
      </div>
     
     <ToggleUsers toggles={["View all", "Blocked"]} count={users.length} selected={selected} setSelected={setSelected}/>

     <UserTable flag={flag} setUsers={setUsers} selected={selected} users={users} blockedUsers={blockedUsers} setBlockedUsers={setBlockedUsers}/> 

    </div>
  )
}

export default ClientHome