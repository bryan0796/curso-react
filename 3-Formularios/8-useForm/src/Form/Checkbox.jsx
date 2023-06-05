import React from 'react'

const Checkbox = ({options, value, setValue}) => {

  function handleChange({target}) {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter( item => item !== target.value))
    }
  }

  return (
    <>
      {options.map(option => (
        <label key={option} htmlFor={option}>
          <input 
            type="checkbox" 
            name={option} 
            id={option}
            value={option}
            onChange={handleChange}
            checked={value.includes(option)}
          />
          {option}
        </label>
      ))}
    </>
  )
}

export default Checkbox