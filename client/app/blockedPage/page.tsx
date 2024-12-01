export const dynamic = 'force-dynamic'
import ClientBlocked from '@/components/ClientBlocked'
import { fetchAllBlockedUsers } from '@/utils/api'
import { UserResponse } from '@/utils/types'
import React from 'react'

const page = async() => {
  const usersData:UserResponse[] = await fetchAllBlockedUsers()
  return (
    <ClientBlocked blockedUsersData={usersData}/>
  )
}

export default page

