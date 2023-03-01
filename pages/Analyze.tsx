import React from 'react'
import { Chart } from '../components/Chart'
import { IoIosArrowBack } from 'react-icons/io'
import TransactionDetail from '../components/TransactionDetail';
import Layout from '@/components/layout';
import Link from 'next/link';

const Analyze = () => {
    return (
        <Layout pageTitle='Analyze'>
            <section className='max-w-md mx-auto px-7'>
                <div>
                    <div className='w-7/12 flex justify-between py-7'>
                        <Link href='/'>
                            <IoIosArrowBack size={28} className='text-white' />
                        </Link>
                        <h1 className='text-white text-2xl font-semibold'>Analyze</h1>
                    </div>
                    <div className='text-white/50 flex items-center justify-end pb-4'>
                        <p>Oct - Feb</p>
                        <IoIosArrowBack size={20} className='ml-2 -rotate-90' />
                    </div>
                </div>
                <Chart />
                <div className='pt-10'>
                    <TransactionDetail />
                </div>
            </section>
        </Layout>
    )
}

export default Analyze