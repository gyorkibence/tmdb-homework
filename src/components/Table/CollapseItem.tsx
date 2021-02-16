import React, { FC } from 'react';
import {
  Typography,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { WikiKeys } from 'models/Wiki.model';
import { imdbURL, wikiURL } from 'services/consts';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';

export interface CollapseItemProps {
  row: { [key: string]: string };
  wiki: {
    data: WikiKeys;
    loading: boolean;
  };
  onSelectSimilar: () => void;
}

const CollapseItem: FC<CollapseItemProps> = (props) => {
  const { row, wiki, onSelectSimilar } = props;
  return (
    <Box margin={1}>
      <Typography variant="h5" gutterBottom>
        {row.name}
      </Typography>
      {wiki.loading && !wiki.data[row.name] ? <CircularProgress className="movies-loading" /> : null}
      {wiki.data[row.name]
        && (
          <div className="more-details-container">
            {wiki.data[row.name].firstParagraph}
            <div className="more-details-inner-container">
              <div className="more-details-links">
                <Link link={`${wikiURL}/?curid=${wiki.data[row.name].pageId}`} name="Wikipedia" />
                <Link link={`${imdbURL}/${row.imdb}`} name="IMDB" />
              </div>
              {
                row.similar ? (
                  <Button
                    color="secondary"
                    title="More similar items"
                    onClick={onSelectSimilar}
                  />
                ) : null
              }
            </div>
          </div>
        )
      }
    </Box>
  );
};

export default CollapseItem;
