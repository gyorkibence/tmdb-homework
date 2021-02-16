import React from 'react';
import Button, { ButtonTypes } from 'components/Button/Button';
import './app.scss';

const App = () => (
  <div className="app-classname">
    <Button title="Search" type={ButtonTypes.submit} />
  </div>
);

export default App;
