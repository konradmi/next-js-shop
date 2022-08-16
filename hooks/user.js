import { useQuery } from 'react-query'
import { fetchJson } from '../lib/api'

export const useUser = () => {
  const { data: user } = useQuery('user', async () => {
    try {
      return await fetchJson('/api/user')
    } catch(e) {
      return undefined
    }
  }, {
    cacheTime: Infinity,
    staleTime: 30*1000
  })

  return user
}
