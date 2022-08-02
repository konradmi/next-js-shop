const Button = ({ children, type }) => {
  return (
    <button type={type} className='bg-green-800 px-4 py-2 rounded text-gray-100 hover:bg-green-700'>
      {children}
    </button>
  )
}

export default Button
