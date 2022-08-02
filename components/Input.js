const Input = ({ type, value, onChange, required }) => {
  const handleChange = (event) => onChange(event.target.value)

  return (
    <input
      required={required}
      type={type}
      value={value}
      onChange={handleChange}
      className='border rounded px-3 py-1 w-80'
    />
  )
}

export default Input


