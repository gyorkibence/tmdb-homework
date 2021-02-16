import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'store';
import { Movie } from 'models/Movie.model';
import { MovieRow } from 'models/Table.model';
import { CircularProgress } from '@material-ui/core';
import Table from 'components/Table/Table';
import './table-container.scss';

const TableContainer = observer(() => {
  const { app } = useStore();
  const { movies, moviesLoading } = app;
  return (
    <div className="tmdb-homework-table-container">
      {
        moviesLoading && (
          <CircularProgress className="movies-loading" />
        )
      }
      {
        movies && movies.length ? (
          <Table
            rowData={movies.map((item: Movie): MovieRow => ({
              name: item.name,
              genres: item.genres.map((item: { name: string }) => item.name).join(', '),
              score: item.score,
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
            onRowClick={(elem) => console.log(elem)}
          />
        ) : null
      }
      {movies && !movies.length && !moviesLoading
        ? <div className="error-message">Movies not found with the given title.</div>
        : null
      }
    </div>
  );
});

export default TableContainer;
