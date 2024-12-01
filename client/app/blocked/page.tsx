import ClientBlocked from '@/components/ClientBlocked'
import TitleCard from '@/components/TitleCard'
import ToggleUsers from '@/components/ToggleUsers'
import UsersCard from '@/components/UsersCard'
import UserTable from '@/components/UserTable'
import { fetchAllBlockedUsers } from '@/utils/api'
import React from 'react'

const page = async() => {
  const usersData = await fetchAllBlockedUsers()
  return (
    <ClientBlocked blockedUsersData={usersData}/>
  )
}

export default page

