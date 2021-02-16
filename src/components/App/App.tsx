import React from 'react';
import SearchContainer from 'containers/SearchContainer/SearchContainer';
import TableContainer from 'containers/TableContainer/TableContainer';
import './app.scss';

const App = () => (
  <div className="tmdb-page-container">
    <SearchContainer />
    <TableContainer />
  </div>
);

export default App;
