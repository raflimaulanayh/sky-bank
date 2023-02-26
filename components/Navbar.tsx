import React from 'react';
import { BiHomeAlt, BiBookmarkAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='w-full fixed bottom-0 py-10'>
            <div className='mx-auto px-7'>
                <div className='flex items-center justify-around w-full px-2 border border-[#383467] bg-[#20204D] rounded-full'>
                    <BiHomeAlt size={25} className='text-white' />
                    <BiBookmarkAlt size={25} className='text-white' />
                    <div className='h-[60px] w-[60px] bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex justify-center items-center'>
                        <AiOutlinePlus size={30} className='text-white' />
                    </div>
                    <IoNotificationsOutline size={25} className='text-white' />
                    <FaRegUser size={25} className='text-white' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar