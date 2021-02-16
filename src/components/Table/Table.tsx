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
import { WikiKeys } from 'models/Wiki.model';
import './table.scss';

export interface TableProps {
  rowData: MovieRow[];
  headerTitles: Array<{ label: string, value: string }>;
  onRowClick: (name: string) => void;
  details?: JSX.Element | JSX.Element[];
  wiki: {
    data: WikiKeys;
    loading: boolean;
  };
};

const Table: FC<TableProps> = (props) => {
  const { rowData, onRowClick, headerTitles, wiki } = props;
  return (
    <TableContainer component={Paper} className="table-container">
      <MaterialTable>
        <TableHead>
          <MaterialRow>
            <TableCell className="header-title-style" />
            {headerTitles.map((item) => (
              <TableCell
                key={item.label}
                className="header-title-style"
              >
                {item.label}
              </TableCell>
            ))}
          </MaterialRow>
        </TableHead>
        <TableBody>
          {rowData.map((item: any) => (
            <TableRow
              key={item.name}
              row={item}
              onRowClick={() => { onRowClick(item.name); }}
              wiki={wiki}
            />
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
