import React, { useState } from 'react';
import Textarea from "./Textarea";

export default {
  title: 'Atoms|Textarea',
  component: Textarea
}

export const DefaultTextarea = () => {
  const [value, setValue] = useState({
    textarea: ''
  });
  const onChange = (_key, _value) => {
    const newValue = { ..._value };
    newValue[_key] = _value;
    setValue(newValue);
  };

  return (
    <Textarea
      placeholder="Placeholder"
      value={value.textarea}
      changeEvent={onChange}
      fieldKey="textarea"
    />
  )
};
