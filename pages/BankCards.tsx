import React from 'react'
import Image from 'next/image'
import Layout from './../components/layout/index';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BankCards = () => {
    return (
        <Layout pageTitle='Profil'>
            <section className='max-w-md mx-auto px-7'>
                <div className='flex justify-between py-7'>
                    <h4 className='text-3xl text-white font-semibold'>Bank Cards</h4>
                    <Image src="/foto-rafli.png" alt='Foto Profile' width={60} height={60} />
                </div>
                <div className='py-7 text-center'>
                    <p className='text-white/50'>Balance</p>
                    <h4 className='text-white text-3xl font-semibold'>$1.924,35</h4>
                </div>
                <div className='pt-7'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        <SwiperSlide>
                            <div className='flex justify-center mb-10'>
                                <Image src="/master-card-2.png" alt='Master Card' height={500} width={300} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center mb-10'>
                                <Image src="/master-card.png" alt='Master Card' height={500} width={300} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center mb-10'>
                                <Image src="/master-card-2.png" alt='Master Card' height={450} width={300} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </Layout>
    )
}

export default BankCards