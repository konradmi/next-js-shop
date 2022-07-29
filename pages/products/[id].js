import Head from 'next/head'
import { getProduct, getProducts } from '../../lib/products'
import { ApiError } from '../../lib/api'

export const getStaticPaths = async () => {
  const products = await getProducts()
  return {
    paths: products.map(product => ({
      params: {
        id: product.id.toString()
      }
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { id }}) => {
  try {
    const product = await getProduct(id)
    return {
      props: {
        product
      },
      revalidate: 5 * 60,
    }
  } catch(e) {
    if(e instanceof ApiError && e.status === 404  ) return { notFound: true }
    throw e
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
