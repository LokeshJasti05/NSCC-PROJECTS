import React from 'react'

const SongItem=({name,image,desc,id})=> {
  return (
    <div className='min-w-[180x] p-2 px-3 rounder cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounder' src={image} alt=''/>
        <p className='font-bold mt-2 mb-1'>{name} </p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem