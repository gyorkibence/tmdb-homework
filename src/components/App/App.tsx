import React from 'react';
import TableContainer from 'containers/TableContainer/TableContainer';
import './app.scss';

const App = () => (
  <div className="tmdb-page-container">
    <div className="app-title">The Movie Database</div>
    <TableContainer />
  </div>
);

export default App;
