const stripProduct = product => ({
  id: product.id,
  title: product.title,
  description: product.description,
})

export const getProducts = async () => {
  const response = await fetch('http://localhost:1337/products')
  const products = await response.json()
  return products.map(stripProduct)
}

export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:1337/products/${id}`)
  const product = await response.json()
  return stripProduct(product)
}
