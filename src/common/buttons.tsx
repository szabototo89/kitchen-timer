import * as React from 'react';
import Button from 'common/Button';

export const SimpleButton = (props) => (
  <Button {...props} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
    {props.children}
  </Button>
);

export const PrimaryButton = (props) => (
  <Button {...props} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
    {props.children}
  </Button>
);