import React, { FC, useState } from 'react';
import {
  TableRow as Row,
  Collapse,
  IconButton,
  TableCell,
  Typography,
  Box,
  CircularProgress,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { imdbURL, wikiURL } from 'services/consts';
import { WikiKeys } from 'models/Wiki.model';
import Link from 'components/Link/Link';

export interface TableRowProps {
  row: { [key: string]: string };
  wiki: {
    data: WikiKeys;
    loading: boolean;
  };
  onRowClick: () => void;
  details?: JSX.Element | JSX.Element[];
}

const TableRow: FC<TableRowProps> = (props) => {
  const [collapseOpen, seCollapseOpen] = useState<boolean>(false);
  const { row, onRowClick, wiki } = props;
  return (
    <React.Fragment>
      <Row onClick={() => { onRowClick(); seCollapseOpen(!collapseOpen) }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" >
            {collapseOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {
          Object.keys(row).map((item: string, index) => row[item] ? (
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
                <Box margin={1}>
                  <Typography variant="h5" gutterBottom>
                    {row.name}
                  </Typography>
                  {wiki.loading && !wiki.data[row.name] ? <CircularProgress className="movies-loading" /> : null}
                  {wiki.data[row.name]
                    && (
                      <div className="more-details-container">
                        {wiki.data[row.name].firstParagraph}
                        <div className="more-details-links">
                          <Link link={`${wikiURL}/?curid=${wiki.data[row.name].pageId}`} name="Wikipedia" />
                          <Link link={`${imdbURL}/${row.imdb}`} name="IMDB"/>
                        </div>
                      </div>
                    )
                  }
                </Box>
              </Collapse>
            </TableCell>
          </Row>
        ) : null
      }
    </React.Fragment>
  );
};

export default TableRow;
