"use client"
import { House } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
  const path=usePathname();

  useEffect(()=>{
    console.log(path)
  },[])
  return (
    <div className='flex justify-between p-6 px-10 shadow-sm fixed top-0 w-full z-10 bg-white'>
      <div className='flex gap-1'>
        <h1 className='font-bold text-2xl text-slate-800'>Mokiekie</h1>
        <House className='w-5 h-5'/>
        <h1>Global Ltd</h1>
      </div>
      <ul className='flex gap-5'>
        <Link href={'/'}><li className={`'text-sm text-gray-700 ${path=='/'&&'text-green-500 text-sm'}`}>For Sell</li></Link>
        <li className='text-sm text-gray-700'>For Rent</li>
        <li className='text-sm text-gray-700'>About Us</li>
      </ul>
      
    </div>
  )
}

export default Header
