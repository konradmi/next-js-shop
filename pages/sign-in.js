import { useState } from 'react'
import Page from '../components/Page'
import Input from '../components/Input'
import Field from '../components/Field'
import Button from '../components/Button'
import { fetchJson } from '../lib/api'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState({ loading: false, error: false })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, error: false })
    try {
      const response = await fetchJson('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
      setStatus({ loading: false, error: false })
    } catch (e) {
      setStatus({ loading: false, error: true })
    }
  }

  return (
    <Page title='Sign in'>
      <form onSubmit={handleSubmit}>
        <Field label='Email'>
          <Input required type='email' value={email} onChange={setEmail}/>
        </Field>
        <Field label='Password'>
          <Input required type='password' value={password} onChange={setPassword}/>
        </Field>
        {
          status.error && <p className='text-red-700'>Invalid credentials</p>
        }
        {
          status.loading
            ? <p>Loading....</p>
            : (
              <Button type='submit'>
                Sing in
              </Button>
            )
        }
      </form>
    </Page>
  )
}

export default SignIn
