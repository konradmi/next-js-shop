import { getProducts } from '../lib/products'
import ProductCard from '../components/ProductCard'
import Page from '../components/Page'

export const getStaticProps = async () => {
  const products = await getProducts()
  return {
    props: { products },
    revalidate: 5 * 60,
  }
}

const HomePage = ({ products }) => {
  return (
   <Page title='Indoor plants'>
     <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
       {products.map(product => (
         <li key={product.id}>
           <ProductCard product={product}/>
         </li>
       ))}
     </ul>
   </Page>
  )
}

export default HomePage
