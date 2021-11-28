import React from 'react';
import * as C from './styles';
const Input = ({ label, type, name, value, setValue, setError }) => {
  function handleChange({ target }) {
    setValue(target.value);
    setError(null);
  }

  return (
    <C.Input>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </C.Input>
  );
};

export default Input;
