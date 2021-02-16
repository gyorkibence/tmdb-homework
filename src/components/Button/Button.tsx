import React, { FC } from 'react';
import { Button, PropTypes } from '@material-ui/core';
import './button.scss';

export enum ButtonTypes {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

export interface AppButtonProps {
  title: string;
  color?: PropTypes.Color;
  type?: ButtonTypes;
  onClick?: () => void;
}

const AppButton: FC<AppButtonProps> = (props) => {
  const {
    title,
    onClick,
    color = 'primary',
    type = ButtonTypes.button,
  } = props;
  return (
    <Button
      color={color}
      variant="contained"
      type={type}
      onClick={onClick}
      className="tmdb-homework-button-container"
    >
      {title}
    </Button>
  );
};

export default AppButton;
