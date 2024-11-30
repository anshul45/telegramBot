"use client";
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { RiDeleteBin3Line } from "react-icons/ri";
import { VscLock ,VscUnlock} from "react-icons/vsc";
import { blockUser, deleteUser, unBlockUser } from '@/utils/api';

const UserTable = ({data}:any) => {
  const handleDelete = async(userId:string) => {
    const res = await deleteUser(userId);
  }
  const handleBlock = async(userId:string,status:string) => {
    if(status === "ACTIVE")
    {
     const res = await blockUser(userId)
    }
    else {
      const res = await unBlockUser(userId)
    }
  }
  return (
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
          {data?.map((row:any) => (
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
  );
};

export default UserTable;
