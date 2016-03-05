import * as React from 'react';

function Button(props: any) {
  const { children, className } = props;

  return (
    <button {...props}>
      { children }
    </button>
  );
}

export default Button;