import Link from 'next/link'
import { useSignOut, useUser } from '../hooks/user'

const NavBar = () => {
  const user = useUser()
  const signOut = useSignOut()

  return (
    <nav className='px-2 py-1 text-sm'>
      <ul className='flex gap-2'>
       <li className='text-lg font-extrabold'>
          <Link href='/'>
            <a>
              Next Shop
            </a>
          </Link>
       </li>
        <li role='separator' className='flex-1'/>
        {
          user ? (
            <>
              <li>
                {user.name}
              </li>
              <li>
                <button onClick={signOut}>Sing Out</button>
              </li>
            </>
          ) : (
            <li>
              <Link href='/sign-in'>
                <a>
                  Sign in
                </a>
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default NavBar
