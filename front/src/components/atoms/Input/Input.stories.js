import React, { useState } from "react";
import Input from "./Input";

export default {
  title: 'Atoms|Input',
  component: Input
};

export const DefaultInput = () => {
  const [inputValue, setInputValue] = useState({
    text: ""
  });
  const onChange = (_key, _value) => {
    const newValue = { ..._value };
    newValue[_key] = _value;
    setInputValue(newValue);
  };

  return (
    <Input
      inputType="text"
      label="Label"
      value={inputValue.text}
      changeEvent={onChange}
      fieldKey="text"
    />
  )
};
