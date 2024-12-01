"use client"
import { addApiKey, fetchApiKey } from '@/utils/api'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface ChangeApiCardProps{
  title:string
  apiKey:any
}

const ChangeApiCard:React.FC<ChangeApiCardProps> = ({title,apiKey}) => {

  const[key,setKey] = useState<any>(apiKey)

  const [value,setValue] = useState<string>("");

  const getApiKey = async(type:"BOT"|"WEATHER") => {
    if(type === 'BOT')
    {
      const botapiKey = await fetchApiKey('BOT');
      setKey(botapiKey)
    }
    else{
      const weatheraoikey = await fetchApiKey('WEATHER');
      setKey(weatheraoikey)
    }
  }


  const handleCLick = async() => {
    if(!value) return;
    await addApiKey(key.type, value) 
    await getApiKey(key.type) 
    setValue("") 
  }



  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Change {title} Api Key</h1>
      <div className='p-7 bg-white rounded-md flex justify-between items-center'>
<div>
      <h1 className='font-semibold mb-3'>{title} APi key witch you have already set.</h1>
      <div className='font-semibold text-green-800'>{key.key}</div>

</div>

      <div>
        <h1 className='font-semibold mb-3'>Edit {title} Api key.</h1>
        <div className='flex gap-5'>
        <input className='border-2 w-72 focus:outline-none rounded-md p-2' placeholder='Your Api Key' value={value} onChange={e => setValue(e.target.value)}/>
        <Button variant='outlined' color='info' onClick={handleCLick}>Change</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ChangeApiCard