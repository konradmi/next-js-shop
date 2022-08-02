import { fetchJson } from './api'

const CMS_URL=process.env.CMS_URL

export const getProducts = async () => {
  const products = await fetchJson(`${CMS_URL}/products`)
  return products.map(stripProduct)
}

export const getProduct = async (id) => {
  const product = await fetchJson(`${CMS_URL}/products/${id}`)
  return stripProduct(product)
}

const stripProduct = product => ({
  id: product.id,
  title: product.title,
  description: product.description,
  price: `$ ${product.price.toFixed(2)}`,
  pictureUrl: `${CMS_URL}${product.picture.url}`
})
