import React from 'react'
import {assets} from '../assets/assets'
function Sidebar() {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justfiy-around' >
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.home_icon} alt='' /> 
            <p className='font-bold'>Home</p>     
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt='' /> 
            <p className='font-bold'>Search</p>     
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className=' p-4 flex item-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt=''/>
                    <p className='font-semibold'>Your library</p>
                </div>
                <div className='flex item-center gap-3'>
                    <img className='w-7' src={assets.arrow_icon} alt="" />
                    <img className='w-7' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>it is easy, we will help you</p>
                <button className='0-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4 mt-4'>
                <h1>Find some potcasts to follow</h1>
                <p className='font-light'> We will update yyou on new episodes</p>
                <button className='0-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Sidebar
