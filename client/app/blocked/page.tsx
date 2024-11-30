import TitleCard from '@/components/TitleCard'
import ToggleUsers from '@/components/ToggleUsers'
import UsersCard from '@/components/UsersCard'
import UserTable from '@/components/UserTable'
import React from 'react'

const page = () => {
  return (
    <div className='flex-[0.9] p-8 w-full'>
        <TitleCard title="All Blocked Users" desc="Find all Blocked users here."/>
           <div className="bg-white p-3  rounded-lg flex gap-5 mt-3 w-fit">
        <UsersCard title="Blocked Users" count={3}/>
      </div>
        <ToggleUsers toggles={["Blocked"]}/>
        <UserTable/>
    </div>
  )
}

export default page