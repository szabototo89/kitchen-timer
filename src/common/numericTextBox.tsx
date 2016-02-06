import * as React from 'react';
import TextBox from 'common/textbox';
import Button from 'common/button';

export interface NumericTextBoxProps {
  value: number;
  hasValueChanged?: (previousValue, currentValue) => void;
}

function NumericTextBox({ value, hasValueChanged }: NumericTextBoxProps) {

  const changeNumericValue = (actual) => {
    hasValueChanged && hasValueChanged(value, value + actual);
  };

  return (
    <div>
      <span>{ value }</span>
      <Button onClick={() => changeNumericValue(1)}>+</Button>
      <Button onClick={() => changeNumericValue(-1)}>-</Button>
    </div>
  );
}

export default NumericTextBox;