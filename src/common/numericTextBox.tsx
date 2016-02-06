import * as React from 'react';
import TextBox from 'common/textbox';
import Button from 'common/button';

export interface NumericTextBoxProps {
  value: number;
  onValueChange?: (currentValue) => void;
}

function NumericTextBox({ value, onValueChange }: NumericTextBoxProps) {

  const handleNumericValueChange = (actual) => {
    onValueChange && onValueChange(value + actual);
  };

  return (
    <div>
      <span>{ value }</span>
      <Button onClick={() => handleNumericValueChange(1)}>+</Button>
      <Button onClick={() => handleNumericValueChange(-1)}>-</Button>
    </div>
  );
}

export default NumericTextBox;