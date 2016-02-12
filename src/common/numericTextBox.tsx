import * as React from 'react';
import TextBox from 'common/textbox';
import Button from 'common/button';
import ClassNameBuilder from "utils/classNameBuilder";

export interface NumericTextBoxProps {
  value: number;
  onValueChange?: (currentValue) => void;
}

const classBuilder = new ClassNameBuilder('numeric-textbox');

function NumericTextBox({ value, onValueChange }: NumericTextBoxProps) {
  const handleNumericValueChange = (actual) => {
    onValueChange && onValueChange(value + actual);
  };

  return (
    <div className={classBuilder.element('container')}>
      <span className={classBuilder.element('value')}>{ value }</span>
      <Button className={classBuilder.element('button', 'increment')}
              onClick={() => handleNumericValueChange(1)}>
        +
      </Button>

      <Button className={classBuilder.element('button', 'decrement')}
              onClick={() => handleNumericValueChange(-1)}>
        -
      </Button>
    </div>
  );
}

export default NumericTextBox;