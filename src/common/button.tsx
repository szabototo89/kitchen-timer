import * as React from 'react';

function Button(props: any) {
  const { children } =  props;

  return (<button {...props}>{children}</button>);
}

export default Button;