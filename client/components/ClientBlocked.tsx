"use client"
import React, { useState } from 'react'
import TitleCard from './TitleCard'
import UsersCard from './UsersCard'
import ToggleUsers from './ToggleUsers'
import UserTable from './UserTable'

const ClientBlocked = ({blockedUsersData}:any) => {
  const[users,setUsers] = useState([]);
  const[blockedUsers,setBlockedUsers] = useState(blockedUsersData);
  const [selected, setSelected] = useState<string>("BLOCKED");
  const flag = "block";
  return (
    <div className='flex-[0.9] py-6 px-8 h-screen w-full'>
        <TitleCard title="All Blocked Users" desc="Find all Blocked users here."/>
           <div className="bg-white p-3  rounded-lg flex gap-5 mt-3 w-fit">
        <UsersCard title="Blocked Users" count={blockedUsers.length}/>
      </div>
      <ToggleUsers toggles={["Blocked"]} count={blockedUsers.length} selected={selected} setSelected={setSelected}/>
 
      <UserTable flag={flag} setUsers={setUsers} selected={selected} users={users} blockedUsers={blockedUsers} setBlockedUsers={setBlockedUsers}/>
  
    </div>
  )
}

export default ClientBlocked