import React from 'react';
import Image from 'next/image';
import { BiWifi2 } from 'react-icons/bi';
import TypeContent from '../TypeContent';
import TransactionDetail from '../TransactionDetail';
import Layout from '../layout';

const Header = () => {
    return (
        <Layout pageTitle='Home'>
            <header className='mx-auto max-w-md'>
                <div className='px-7'>
                    <div className='flex justify-between py-7'>
                        <div>
                            <h4 className='text-white text-3xl font-bold'>Hello,</h4>
                            <p className='text-[#B9B2C4] text-lg'>Rafli Maulana</p>
                        </div>
                        <div>
                            <Image src="/foto-rafli.png" alt='Foto Profile' width={60} height={60} />
                        </div>
                    </div>
                    <div className='flex bg-gradient-to-bl from-[#181848] via-[#2b2b92c5] to-[#aa2b6f] rounded-3xl h-[230px] w-full mx-auto px-7'>
                        <div className='pt-7 w-9/12 ml-2 mr-10'>
                            <h2 className='font-bold text-3xl text-white mb-20'>$1.924,35</h2>
                            <p className='text-white'>5489 7654 3210 7894</p>
                            <p className='text-white/50'>04/24</p>
                        </div>
                        <div className='flex flex-col w-3/12 pt-20 space-y-7'>
                            <div>
                                <BiWifi2 size={55} className='text-white/50 rotate-90' />
                            </div>
                            <div className=''>
                                <Image src="/Mastercard.svg" alt='Master Card' width={42} height={28} />
                            </div>
                        </div>
                    </div>
                </div>
                <TypeContent />
                <section className='px-7 mx-auto'>
                    <TransactionDetail />
                </section>
            </header>
        </Layout>
    )
}

export default Header