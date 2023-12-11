import React from "react";

const CustomFormElement = ({ mode, label, value, onChange, id, options }) => {

  switch (mode) {

    case "input":
      return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            type="text"
            id={id}
            value={value}
            onChange={onChange}
          />
        </div>
      );

    case "select":
      return (
        <div>
          <label htmlFor={id}>{label}</label>
          <select
            id={id}
            value={value}
            onChange={onChange}
          >
            {options.map((elem, i) => (
              <option key={i} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>
      );

    case "checkbox":
      return (
        <div>
          <label>
            <input
              type="checkbox"
              id={id}
              checked={value}
              onChange={onChange}
            />
            {label}
          </label>
        </div>
      );

    case "radio":
      return (
        <div>
          <label>{label}</label>
          {options.map((elem, i) => (
            <label key={i}>
              <input
                type="radio"
                name={id}
                value={elem}
                checked={value === elem}
                onChange={onChange}
              />
              {elem}
            </label>
          ))}
        </div>
      );
  }
};

export default CustomFormElement;
