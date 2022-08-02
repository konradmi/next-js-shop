import { useState } from 'react'
import Page from '../components/Page'
import Input from '../components/Input'
import Field from '../components/Field'
import Button from '../components/Button'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    event.preventDefault()
    console .log('should submit:', email, password)
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
        <Button type='submit'>
          Sing in
        </Button>
      </form>
    </Page>
  )
}

export default SignIn
