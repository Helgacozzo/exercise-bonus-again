import React, { useState } from "react";
import CustomFormElement from "./CustomFormElement";

const App = () => {
  const [formData, setFormData] = useState([
    {
      id: "user-name",
      label: "User Name",
      value: "",
      mode: "input",
    },
    {
      id: "sex",
      label: "Sex",
      value: "",
      mode: "radio",
      options: ["m", "f"],
    },
  ]);

  return (
    <>
      {formData.map(({ id, mode, label, value, options }, i) => {
        const valueName = mode === "checkbox" ? "checked" : "value";

        return (
          <CustomFormElement
            key={id}
            mode={mode}
            label={label}
            value={value}
            options={options}
            onChange={(e) => {
              setFormData((index) => {
                const newFormData = structuredClone(formData);
                newFormData[i].value[index] = valueName;
                setFormData('');
              });
            }}
          />
        );
      })}

      <button
        onClick={() => {
          const userData = formData.map(({ id, value }) => ({ key: id, value }));
          console.log(userData);
        }}
      >Invia</button>
    </>
  );
};

export default App;
