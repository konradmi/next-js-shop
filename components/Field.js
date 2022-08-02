const Field = ({ label, children }) => {
  return (
    <label className='block'>
      <span className='black text-sm text-gray-600'>{label}</span>
      {children}
    </label>
  )
 }

 export default Field
