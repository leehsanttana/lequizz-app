import React from 'react';
import * as C from './styles';

const Radio = ({ label, options, value, setValue, ...props }) => {
  return (
    <C.Radio>
      <label htmlFor="">{label}</label>
      {options.map((option) => {
        return (
          <div key={option}>
            <label className="option">
              {option}
              <input
                type="radio"
                value={option}
                checked={value === option}
                onChange={({ target }) => setValue(target.value)}
                {...props}
              />
            </label>
          </div>
        );
      })}
    </C.Radio>
  );
};

export default Radio;
