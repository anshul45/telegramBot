import React from 'react'

interface ToggleUsersProps{
  toggles:string[]
}

const ToggleUsers:React.FC<ToggleUsersProps> = ({toggles}) => {


  return (
    <div className="my-3">
        <h1 className="font-medium">All Users ()</h1>
        <div className="flex justify-between items-center">
        <div className="flex bg-red-400  p-1 gap-1 w-fit rounded-md">
          {toggles.map((data:string) => (<h6 key={data} className="bg-white text-lg p-1 rounded-sm">{data}</h6>))}
        </div>
        <input className="border-2 focus:outline-none rounded-md p-2" placeholder="🔍 Search"/>
        </div>
      </div>
  )
}

export default ToggleUsers