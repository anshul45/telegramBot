"use client"
import React, { useState } from 'react'
import TitleCard from './TitleCard'
import UsersCard from './UsersCard'
import ToggleUsers from './ToggleUsers'
import UserTable from './UserTable'
import { UserResponse } from '@/utils/types'

interface ClientBlockedProps {
  blockedUsersData:UserResponse[];
}

const ClientBlocked:React.FC<ClientBlockedProps> = ({blockedUsersData}) => {
  const[users,setUsers] = useState<UserResponse[]>([]);
  const[blockedUsers,setBlockedUsers] = useState<UserResponse[]>(blockedUsersData);
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