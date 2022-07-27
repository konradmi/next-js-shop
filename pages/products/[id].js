import Head from 'next/head'
import { getProduct, getProducts } from '../../lib/products'

export const getStaticPaths = async () => {
  const products = await getProducts()
  return {
    paths: products.map(product => ({
      params: {
        id: product.id.toString()
      }
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { id }}) => {
  const product = await getProduct(id)
  return {
    props: {
      product
    }
  }
}

const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <main className='p-10'>
        <h1 className='text-lg'>{product.title}</h1>
        <p>
          {product.description}
        </p>
      </main>
    </>
  )
}

export default ProductPage
