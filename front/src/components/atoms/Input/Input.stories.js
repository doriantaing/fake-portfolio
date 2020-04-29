import React, { useState } from "react";
import Input from "./Input";

export default {
  title: 'Atoms|Input',
  component: Input
};

export const DefaultInput = () => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (e) => setInputValue(e.target.value);

  return (
    <Input inputType="text"  label="Label" value={inputValue} changeEvent={onChange}/>
  )
};
