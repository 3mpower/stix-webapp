import React from 'react'
import { Icons } from '../icons'

const HomeFooter = () => {
  return (
    <div className='fixed bottom-0 left-0 flex h-[4.375rem] w-full items-center justify-between border-t-[0.01px] border-gray-200 bg-[#FFF] px-10'>
            <div className='flex flex-col items-center justify-center text-gray-500'>
                <Icons.shop />
                <p className='text-xs'>Store</p>
            </div>
            <div className='flex flex-col items-center justify-center text-gray-500'>
                <Icons.user />
                <p className='text-xs'>Profile</p>
            </div>
    </div>
  )
}

export default HomeFooter