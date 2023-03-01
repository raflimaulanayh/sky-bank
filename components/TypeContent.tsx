import Link from 'next/link'
import React from 'react'
import { BiAnalyse, BiBookmarkAlt } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoDocumentsOutline } from 'react-icons/io5'

const TypeContent = () => {
    return (
        <div className='px-7 py-5'>
            <div className='flex justify-between'>
                <Link href='/Analyze'>
                    <div className='flex items-center justify-center h-[70px] w-[70px] rounded-2xl bg-gradient-to-br from-[#aa2b6f] via-[#a44276] to-[#0fa184] backdrop-blur-3xl'>
                        <BiAnalyse size={30} className='text-white' />
                    </div>
                    <p className='text-white'>Analyze</p>
                </Link>
                <Link href='/'>
                    <div className='flex items-center justify-center h-[70px] w-[70px] rounded-2xl bg-gradient-to-bl from-purple-500 via-indigo-500 to-[#00FFC2] backdrop-blur-3xl'>
                        <FaRegCalendarAlt size={30} className='text-white' />
                    </div>
                    <p className='text-white'>Calendar</p>
                </Link>
                <Link href='/'>
                    <div className='flex items-center justify-center h-[70px] w-[70px] rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-yellow-500 backdrop-blur-3xl'>
                        <IoDocumentsOutline size={30} className='text-white' />
                    </div>
                    <p className='text-white'>Document</p>
                </Link>
                <Link href='/BankCards'>
                    <div className='flex items-center justify-center h-[70px] w-[70px] rounded-2xl bg-gradient-to-bl from-indigo-500 via-purple-500 to-yellow-500 backdrop-blur-3xl'>
                        <BiBookmarkAlt size={30} className='text-white' />
                    </div>
                    <p className='text-white'>Collect</p>
                </Link>
            </div>
        </div>
    )
}

export default TypeContent