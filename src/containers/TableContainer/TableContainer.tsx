import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'store';
import { Movie } from 'models/Movie.model';
import { CircularProgress } from '@material-ui/core';
import Table from 'components/Table/Table';
import { KeyboardArrowLeft } from '@material-ui/icons';
import './table-container.scss';

const TableContainer = observer(() => {
  const { app } = useStore();
  const [similar, setSimilar] = useState<string | null>(null);
  const { movies, moviesLoading, wiki, getWikiData, wikiLoading } = app;
  const rowData = !!similar && movies
    ? movies.find((item: Movie) => item.id === similar)?.similar
    : movies;

  return (
    <div className="tmdb-homework-table-container">
      {
        moviesLoading && (
          <div className="loading-container">
            <CircularProgress className="movies-loading" />
          </div>
        )
      }
      {similar && movies ? (
        <div className="similar-item-title-container">
          <KeyboardArrowLeft onClick={() => setSimilar(null)} />
          {`These movies similar to: ${movies.find((item: Movie) => item.id === similar)?.name}`}
        </div>
      ) : null}
      {
        rowData && rowData.length ? (
          <Table
            rowData={rowData.map((item: Movie) => ({
              id: item.id,
              name: item.name,
              genres: item.genres.map((item: { name: string }) => item.name).join(', '),
              score: item.score,
              imdb: item.socialMedia.imdb,
              similar: item.similar,
            }))}
            headerTitles={[
              {
                label: 'Title',
                value: 'Title',
              },
              {
                label: 'Genres',
                value: 'Genres',
              },
              {
                label: 'Score',
                value: 'Score',
              },
            ]}
            onRowClick={(name: string) => getWikiData(name)}
            onSelectSimilar={(id: string) => setSimilar(id)}
            wiki={{
              data: wiki,
              loading: wikiLoading,
            }}
            columns={['name', 'genres', 'score']}
          />
        ) : null
      }
      {rowData && !rowData.length && !moviesLoading
        ? <div className="error-message">Movies not found with the given parameters.</div>
        : null
      }
    </div>
  );
});

export default TableContainer;
