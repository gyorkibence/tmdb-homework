import React, { FC } from 'react';
import {
  Table as MaterialTable,
  TableRow as MaterialRow,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from '@material-ui/core';
import TableRow from './TableRow';
import { MovieRow } from 'models/Table.model';
import './table.scss';

export interface TableProps {
  rowData: MovieRow[];
  headerTitles: Array<{ label: string, value: string }>;
  onRowClick: (name: string) => void;
};

const Table: FC<TableProps> = (props) => {
  const { rowData, onRowClick, headerTitles } = props;
  return (
    <TableContainer component={Paper} className="table-container">
      <MaterialTable>
        <TableHead>
          <MaterialRow>
            <TableCell className="header-title-style" />
            {headerTitles.map((item) => (
              <TableCell className="header-title-style">{item.label}</TableCell>
            ))}
          </MaterialRow>
        </TableHead>
        <TableBody>
          {rowData.map((item: any) => (
            <TableRow
              key={item.name}
              row={item}
              onRowClick={() => { onRowClick(item.name); }}
            />
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
