import { Button } from '@mui/material'
import React from 'react'

interface ChangeApiCardProps{
  title:string
}

const ChangeApiCard:React.FC<ChangeApiCardProps> = ({title}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Change {title} Api Key</h1>
      <div className='p-7 bg-white rounded-md'>

      <div className='font-semibold'>You can't see api key But you can change api key for {title}.</div>
      <div className='flex justify-between mt-4'>
        <input className='border-2 focus:outline-none rounded-md p-2' placeholder='Your Api Key'/>
        <Button variant='outlined' color='info'>Change</Button>
      </div>
      </div>
    </div>
  )
}

export default ChangeApiCard