import React, { FC } from 'react';
import { Button as MaterialButton, PropTypes } from '@material-ui/core';
import './button.scss';

export enum ButtonTypes {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

export interface ButtonProps {
  title: string;
  color?: PropTypes.Color;
  type?: ButtonTypes;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    title,
    onClick,
    color = 'primary',
    type = ButtonTypes.button,
  } = props;
  return (
    <MaterialButton
      color={color}
      variant="contained"
      type={type}
      onClick={onClick}
      className="tmdb-homework-button-container"
    >
      {title}
    </MaterialButton>
  );
};

export default Button;
