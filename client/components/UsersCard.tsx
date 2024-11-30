import React from 'react'

interface UsersCardProps {
  title:string,
  count:number
}

const UsersCard:React.FC<UsersCardProps> = ({title, count}) => {
  return (
    <div className='border-[1px] bg-slate-50  p-4 w-72 rounded-md shadow-sm'>
        <h6 className='text-sm'>{title}</h6>
        <h1 className='font-semibold text-2xl'>{count}</h1>
    </div>
  )
}

export default UsersCard