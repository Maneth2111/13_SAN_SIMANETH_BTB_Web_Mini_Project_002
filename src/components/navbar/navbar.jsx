import Image from 'next/image'
import React from 'react'
import arrowIcon from '../../../asset/arrow.png'
import notification from'../../../asset/notification.png'
import profile from '../../../asset/logo.png'

export default function Navbar() {
  return (
    <>
    <div className='flex justify-between px-5 py-4 border-b-1 border-gray-300'>
        <div className='flex item-center'>
            <p className='text-gray-500'>workspace</p> 
            <Image src={arrowIcon} alt='arrow' className='w-[24px] h-[24px]'/>
            HRD Design
        </div>
        <div className='flex gap-x-6'>
            <Image src={notification} alt='notification' className='w-[30px] h-[30px] self-center'/>
            <div className='flex gap-x-4'>
            <Image src={profile} alt='profile' className='rounded-[50%] w-[50px]'/>
            <div>
                <p className='text-sm text-black'>Monster</p>
                <p className='text-blue-300'>blackmonster@gmail.com</p>
            </div>

            </div>
            
        </div>
    </div>
    </>
    
  )
}
