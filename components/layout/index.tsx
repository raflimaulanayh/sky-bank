import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';

interface LayoutProps {
    children: ReactNode
    pageTitle: string
}

const Layout = (props: LayoutProps) => {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>Sky | {pageTitle}</title>
                <meta name="description" content="Learn Typescript with next js and tailwind css" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='bg-[#000040] min-h-screen rounded-3xl'>
                <div>{children}</div>
                <div className='mx-auto max-w-md'>
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Layout