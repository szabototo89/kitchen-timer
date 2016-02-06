import * as React from 'react';

function TextBox(props: any) {
  const { onValueChange } = props;

  function hasValueChanged(event: any) {
    onValueChange && onValueChange(event.target.value);
  }

  return <input type="text" {...props} onChange={hasValueChanged} />
}

export default TextBox;