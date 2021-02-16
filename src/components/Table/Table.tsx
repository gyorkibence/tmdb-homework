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
import { WikiKeys } from 'models/Wiki.model';
import { MovieRow } from 'models/Table.model';
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
  onSelectSimilar: (id: string) => void;
  columns: string[];
};

const Table: FC<TableProps> = (props) => {
  const { rowData, onRowClick, headerTitles, wiki, onSelectSimilar, columns } = props;
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
              key={item.id}
              row={item}
              onRowClick={() => { onRowClick(item.name); }}
              wiki={wiki}
              onSelectSimilar={() => onSelectSimilar(item.id)}
              columns={columns}
            />
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
