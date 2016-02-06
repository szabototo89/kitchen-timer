import * as React from 'react';

function TextBox(props: any) {
  const { onValueChange } = props;

  function handleValueChange(event: any) {
    onValueChange && onValueChange(event.target.value);
  }

  return <input type="text" {...props} onChange={handleValueChange} />
}

export default TextBox;