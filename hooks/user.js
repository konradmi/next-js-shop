import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchJson } from '../lib/api'

const USER_QUERY_KEY = 'user'

export const useSignIn = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation( ({ email, password }) =>
    fetchJson('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    }))

  return {
    signIn: async (email, password) => {
      try {
        const user = await mutation.mutateAsync({ email, password })
        queryClient.setQueryData(USER_QUERY_KEY, user)
        return true
      } catch (e) {
        return false
      }
    },
    signInError: mutation.isError,
    signInLoading: mutation.isLoading,
  }
}

export const useSignOut = () => {
  const mutation =  useMutation(() => fetchJson('/api/logout'))
  const queryClient = useQueryClient()
  return async () => {
    await mutation.mutateAsync()
    queryClient.setQueryData(USER_QUERY_KEY, undefined)
  }
}

export const useUser = () => {
  const { data: user } = useQuery(USER_QUERY_KEY, async () => {
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
