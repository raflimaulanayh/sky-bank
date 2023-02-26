import Head from 'next/head'
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>TSX ASIK</title>
        <meta name="description" content="Learn Typescript with next js and tailwind css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#000040] min-h-screen">
        <Header />
      </main>
    </>
  )
}
