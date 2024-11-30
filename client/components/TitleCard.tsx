import React from 'react'

interface TitleCardProps{
  title:string,
  desc:string
}

const TitleCard:React.FC<TitleCardProps> = ({title, desc}) => {
  
  return (
    <div>
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-sm">{desc}</p>
      </div>
  )
}

export default TitleCard