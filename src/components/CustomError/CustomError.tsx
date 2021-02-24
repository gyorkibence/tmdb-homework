import React, { FC } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export interface CustomErrorComponentProps {
  open: boolean;
  message: string;
}

const CustomErrorComponent: FC<CustomErrorComponentProps> = ({ open, message }) => (
  <Snackbar open={open} autoHideDuration={5000}>
    <Alert severity="error">{message}</Alert>
  </Snackbar>
);

export default CustomErrorComponent;
