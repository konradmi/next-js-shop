import { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '../components/Page'
import Input from '../components/Input'
import Field from '../components/Field'
import Button from '../components/Button'
import { useSignIn } from '../hooks/user'

const SignIn = () => {
  const router = useRouter()
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState('')
  const { signIn, signInError,  signInLoading } = useSignIn()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const valid = await signIn(email, password)
    if(valid)  router.push('/')
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
          signInError && <p className='text-red-700'>Invalid credentials</p>
        }
        {
          signInLoading
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
