export const fetchJson = async (url) => {
  const response = await fetch(url)
  if(!response.ok) throw new Error(`request failed ${response.status}`)

  return await response.json()
}
