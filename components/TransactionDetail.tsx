/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { dataTransaction } from './data/data';

const TransactionDetail = () => {
    return (
        <>
            <div className='flex items-center justify-between mb-2'>
                <h4 className='text-xl text-white font-semibold'>Transaction details</h4>
                <p className='text-white/50'>View All</p>
            </div>
            <div className='pb-4'>
                <h5 className='text-white/50 text-center'>Total balance</h5>
                <h2 className='font-semibold text-white text-3xl text-center'>$1.924,35</h2>
            </div>
            {
                dataTransaction.map((item) => (
                    <div key={item.id} className='flex justify-between hover:bg-gray-500/50 hover:rounded-lg'>
                        <div className='flex justify-between w-full py-2 mx-3'>
                            <div className='flex '>
                                <img src={item.image} alt={item.name} width={55} height={55} />
                                <div className='ml-4'>
                                    <h4 className='text-lg text-white font-semibold'>{item.name}</h4>
                                    <p className='text-[#B9B2C4]'>{item.date}</p>
                                </div>
                            </div>
                            <div className=''>
                                <h4 className='text-lg text-white font-semibold'>{item.price}</h4>
                                <p className='text-[#B9B2C4]'>{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TransactionDetail