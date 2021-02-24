import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'store';
import { Movie } from 'models/Movie.model';
import { CircularProgress } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import { useLazyQuery } from '@apollo/client';
import { GET_MOVIES_BY_TITLE } from 'queries';
import Table from 'components/Table/Table';
import Search from 'components/Search/Search';
import CustomErrorComponent from 'components/CustomError/CustomError';
import './table-container.scss';

const TableContainer = observer(() => {
  const { app } = useStore();
  const [similar, setSimilar] = useState<string | null>(null);
  const { wiki, getWikiData, wikiLoading, wikiErrorMessage } = app;
  const [getData, { data: movies, loading: moviesLoading, error }] = useLazyQuery(GET_MOVIES_BY_TITLE);

  const rowData = !!similar && movies?.searchMovies
    ? movies?.searchMovies.find((item: Movie) => item.id === similar)?.similar
    : movies?.searchMovies;

  return (
    <div className="tmdb-homework-table-form">
      <Search handleSubmit={(value) => getData({ variables: { title: value } })} />
      <CustomErrorComponent open={!!error} message={error ? error.message : ''} />
      <CustomErrorComponent open={!!wikiErrorMessage} message={wikiErrorMessage} />
      <div className="tmdb-homework-table-container">
        {
          moviesLoading && (
            <div className="loading-container">
              <CircularProgress className="movies-loading" />
            </div>
          )
        }
        {similar && movies && movies.searchMovies ? (
          <div className="similar-item-title-container">
            <KeyboardArrowLeft onClick={() => setSimilar(null)} />
            {`These movies similar to: ${movies.searchMovies.find((item: Movie) => item.id === similar)?.name}`}
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
    </div>
  );
});

export default TableContainer;
