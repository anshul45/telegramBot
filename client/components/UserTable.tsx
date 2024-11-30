"use client";
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// Sample data for the table
const data = [
  { id: 1, name: 'John Doe', age: 28, country: 'USA' },
  { id: 2, name: 'Jane Smith', age: 34, country: 'Canada' },
  { id: 3, name: 'Samuel Lee', age: 25, country: 'UK' },
];

const UserTable = () => {
  const handleDelete = () => {}
  const handleBlock = () => {}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
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
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell><Button onClick={handleBlock}>Block</Button></TableCell>
              <TableCell><Button variant='text' color='error' onClick={handleDelete}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
