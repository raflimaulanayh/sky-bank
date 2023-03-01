import React from 'react';
import { BiHomeAlt, BiBookmarkAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='w-full fixed bottom-8 max-w-md'>
            <div className='mx-auto px-7'>
                <div className='flex items-center justify-around w-full px-2 border border-[#383467] bg-[#20204D] rounded-full'>
                    <Link href="/">
                        <BiHomeAlt size={25} className='cursor-pointer text-white' />
                    </Link>
                    <Link href="/Analyze">
                        <BiBookmarkAlt size={25} className='cursor-pointer text-white' />
                    </Link>
                    <Link href="">
                        <div className='h-[60px] w-[60px] bg-gradient-to-r hover:bg-gradient-to-bl hover:from-indigo-500 hover:to-[#aa2b6f] from-indigo-500 via-purple-500 to-yellow-500 rounded-full flex justify-center items-center'>
                            <AiOutlinePlus size={30} className='text-white' />
                        </div>
                    </Link>
                    <Link href="">
                        <IoNotificationsOutline size={25} className='cursor-pointer text-white' />
                    </Link>
                    <Link href="/BankCards">
                        <FaRegUser size={25} className='cursor-pointer text-white' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar