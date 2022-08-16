import Link from 'next/link'
import { fetchJson } from '../lib/api'
import { useUser } from '../hooks/user'

const NavBar = () => {
  const user = useUser()

  const handleSignOut = async () => {
    await fetchJson('/api/logout')
  }

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
                <button onClick={handleSignOut }>Sing Out</button>
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
