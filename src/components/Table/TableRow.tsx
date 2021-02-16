import React, { FC, useState } from 'react';
import {
  TableRow as Row,
  Collapse,
  IconButton,
  TableCell,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { WikiKeys } from 'models/Wiki.model';
import CollapseItem from './CollapseItem';

export interface TableRowProps {
  row: { [key: string]: string };
  wiki: {
    data: WikiKeys;
    loading: boolean;
  };
  onRowClick: () => void;
  onSelectSimilar: () => void;
  details?: JSX.Element | JSX.Element[];
  columns: string[];
}

const TableRow: FC<TableRowProps> = (props) => {
  const [collapseOpen, seCollapseOpen] = useState<boolean>(false);
  const { row, onRowClick, wiki, onSelectSimilar, columns } = props;
  return (
    <React.Fragment>
      <Row onClick={() => { onRowClick(); seCollapseOpen(!collapseOpen) }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" >
            {collapseOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {
          Object.keys(row).map((item: string, index: number) => columns.includes(item) ? (
            <TableCell component="th" scope="row" key={index.toString()} className="clickable">
              {row[item]}
            </TableCell>
          ) : null)
        }
      </Row>
      {
        collapseOpen ? (
          <Row>
            <TableCell colSpan={6}>
              <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                <CollapseItem wiki={wiki} row={row} onSelectSimilar={onSelectSimilar} />
              </Collapse>
            </TableCell>
          </Row>
        ) : null
      }
    </React.Fragment>
  );
};

export default TableRow;
