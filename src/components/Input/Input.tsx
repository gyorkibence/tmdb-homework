import React, { FC } from 'react';
import { Input as MaterialInput } from '@material-ui/core';
import './input.scss';

export enum InputColorTypes {
  primary = 'primary',
  secondary = 'secondary',
}

export interface InputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  color?: InputColorTypes;
}

const Input: FC<InputProps> = (props) => {
  const {
    placeholder,
    color = InputColorTypes.primary,
    onChange,
    value,
  } = props;
  return (
    <MaterialInput
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      value={value}
      color={color}
      className="tmdb-homework-input-container"
    />
  );
};

export default Input;
