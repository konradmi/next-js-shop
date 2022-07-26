import Head from 'next/head'
import { getProducts } from '../lib/products'

export const getStaticProps = async () => {
  const products = await getProducts()
  return {
    props: { products },
    revalidate: 5 * 60,
  }
}

const HomePage = ({ products }) => {
  return (
   <>
     <Head>
       <title>Next shop</title>
     </Head>
     <main className='p-10'>
       <h1 className='text-lg'>Next shop</h1>
       <ul>
         {products.map(product => (
           <li key={product.id}>
             {product.title}
           </li>
         ))}
       </ul>
     </main>
   </>
  )
}

export default HomePage
