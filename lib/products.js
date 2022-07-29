import { fetchJson } from './api'

export const getProducts = async () => {
  const products = await fetchJson('http://localhost:1337/products')
  return products.map(stripProduct)
}

export const getProduct = async (id) => {
  const product = await fetchJson(`http://localhost:1337/products/${id}`)
  return stripProduct(product)
}

const stripProduct = product => ({
  id: product.id,
  title: product.title,
  description: product.description,
})
