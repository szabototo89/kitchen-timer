import * as React from 'react';

function Header(props) {
  const { children } = props;

  return <h1>{children}</h1>;
}

export default Header;