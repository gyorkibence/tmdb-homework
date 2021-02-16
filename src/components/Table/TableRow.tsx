import React, { FC, useState } from 'react';
import {
  TableRow as Row,
  Collapse,
  IconButton,
  TableCell,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export interface TableRowProps {
  row: { [key: string]: string };
  onRowClick: () => void;
  children?: JSX.Element | JSX.Element[];
}

const TableRow: FC<TableRowProps> = (props) => {
  const [collapseOpen, seCollapseOpen] = useState<boolean>(false);
  const { row, onRowClick, children } = props;
  return (
    <React.Fragment>
      <Row onClick={() => { onRowClick(); seCollapseOpen(!collapseOpen)}}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" >
            {collapseOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {
          Object.keys(row).map((item) => (
            <TableCell component="th" scope="row">
              {row[item]}
            </TableCell>
          ))
        } 
      </Row>
      {
        children && (
          <Row>
            <TableCell>
              <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                {children}
              </Collapse>
            </TableCell>
          </Row>
        )
      }
    </React.Fragment>
  );
};

export default TableRow;
