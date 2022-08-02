import Head from 'next/head'

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Next shop</title>
      </Head>
      <main className='p-10'>
        <h1 className='text-lg'>Next shop</h1>
        {children}
      </main>
    </>
  )
}

export default Page
