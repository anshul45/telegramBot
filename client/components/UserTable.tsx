"use client";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { RiDeleteBin3Line } from "react-icons/ri";
import { VscLock ,VscUnlock} from "react-icons/vsc";
import { blockUser, deleteUser, fetchAllBlockedUsers, fetchAllUsers, unBlockUser } from '@/utils/api';
import { NoUsers } from './NoUsers';
import { UserResponse } from '@/utils/types';

interface UserTableProps{
  flag: "all" | "block";
  setUsers : React.Dispatch<React.SetStateAction<UserResponse[]>>;
  users : UserResponse[];
  blockedUsers : UserResponse[];
  selected :string;
  setBlockedUsers: React.Dispatch<React.SetStateAction<UserResponse[]>>;

}

const UserTable:React.FC<UserTableProps> = ({flag,setUsers,users,blockedUsers,selected,setBlockedUsers}) => {

  const [data, setData] = useState<UserResponse[]>([]);

  useEffect(() => {
    if(selected === "View all")
      {
        setData(users);
      }
      else
      {
        setData(blockedUsers)
      }
    },[selected,users,blockedUsers])



  const fetchData = async() => {
    if(flag === "all")
    {
      const data:UserResponse[] =  await fetchAllUsers();
      setUsers(data); 
      const blockedData:UserResponse[] = await fetchAllBlockedUsers();
      setBlockedUsers(blockedData)
    }
    else {
      const blockedData:UserResponse[] = await fetchAllBlockedUsers();
      setBlockedUsers(blockedData)
    }
  }

  

  const handleDelete = async(userId:string) => {
    await deleteUser(userId);
    fetchData();
  }

  const handleBlock = async(userId:string,status:string) => {
    if(status === "ACTIVE")
    {
      await blockUser(userId)
    }
    else {
      await unBlockUser(userId)
    }
    fetchData();
  }



  return (
  data.length ?  
  <div className='h-[calc(100vh-295px)]  overflow-y-scroll rounded-md' style={{scrollbarWidth:"none"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row:UserResponse) => (
            <TableRow key={row.id}>
              <TableCell>{row.user_id}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell className={`${row.status === "ACTIVE" ? 'text-green-600':'text-red-600'}`}>{row.status}</TableCell>
              <TableCell>{row.updatedAt}</TableCell>
              <TableCell><Button onClick={()=> handleBlock(row.user_id,row.status)} color={row.status === "ACTIVE" ? 'error':'success'}>{row.status === "ACTIVE" ? <><VscLock/> <span className='ml-2'>BLOCK</span> </>:<><VscUnlock/> <span className='ml-2'>UNBLOCK</span> </>}</Button></TableCell>
              <TableCell><Button  color='error' onClick={() => handleDelete(row.user_id)}><RiDeleteBin3Line/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  :
  <div className='flex items-center h-[calc(100vh-295px)]'>
    <NoUsers/>
  </div>
  
  );
};

export default UserTable;
