import Head from 'next/head'
import NavBar from './NavBar'

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Next shop</title>
      </Head>
      <header>
        <NavBar/>
      </header>
      <main className='p-10'>
        <h1 className='text-lg'>Next shop</h1>
        {children}
      </main>
    </>
  )
}

export default Page
