import { getProduct, getProducts } from '../../lib/products'
import { ApiError } from '../../lib/api'
import Image from 'next/image'
import Page from '../../components/Page'

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
    <Page title={product.title}>
      <div className='flex flex-col lg:flex-row'>
        <div>
          <Image src={product.pictureUrl} width={640} height={480} alt=''/>
        </div>
        <div className='flex-1 lg:ml-4'>
          <p className='text-sm'>
            {product.description}
          </p>
          <p className='text-lg font-bold mt-2'>
            {product.price}
          </p>
        </div>
      </div>
    </Page>
  )
}

export default ProductPage
